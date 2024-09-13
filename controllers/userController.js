import userModel from "../models/user.js";
import catchAsyncError from "../utils/catchAsyncError.js";
import sendEmail from "../utils/sendEmail.js";
import getEmailMessage from "../utils/getEmailMessage.js";
import CustomError from "../utils/CustomError.js";
import jwt from "jsonwebtoken";
import getLoginQuery from "../utils/getLoginQuery.js";
import sendToken from "../utils/sendToken.js";
import crypto from "crypto";
import fileModel from "../models/files.js";
import fs from "fs";
import sharp from "sharp";
import {
  followingRequestModel,
  followRequestModel,
} from "../models/followers.js";

//register new user = api/v1/register
export const register = catchAsyncError(async (req, res, next) => {
  const isExist = await userModel.findOne({ email: req.body.email });
  if (isExist) return next(new CustomError("Email alredy registerd", 400));
  const user = await userModel.create(req.body);
  try {
    const token = user.getJwtToken();
    const message = getEmailMessage(token, user);
    await sendEmail(message);
    res.status(201).json({
      success: true,
      message: "Check your email and verify",
    });
  } catch (error) {
    return next(error);
  }
});

//verify user email = api/v1/register/verify/:token
export const verifyEmail = catchAsyncError(async (req, res, next) => {
  const token = req.params.token;
  if (!token) return res.send("To verify the user token is required");
  const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
  const user = await userModel.findById(decode.id);
  user.isverified = true;
  await user.save();
  return res.send("Verified successfully");
});

// login user = api/v1/login
export const login = catchAsyncError(async (req, res, next) => {
  const query = getLoginQuery(req);
  if (!query) return next(new CustomError("username or email is required"));

  const user = await userModel.findOne(query).select("+password");
  if (!user) return next(new CustomError("User not found", 400));

  const isPasswordCorrect = await user.comparePassword(req.body.password);
  if (!isPasswordCorrect)
    return next(new CustomError("Password is incorrect", 401));
  if (!user.isverified)
    return next(new CustomError("Email is not verified", 401));

  sendToken(user, 200, "Login Successfull", res);
});

//password forgot = api/v1/password/forgot
export const forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findOne(req.body);
  if (!user) return next(new CustomError("User not found", 400));
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: true });
  res
    .status(200)
    .json({ success: true, message: "User Found Successfully", resetToken });
});

//password reset = api/v1/password/reset
export const resetPassword = catchAsyncError(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await userModel
    .findOne({
      resetPasswordToken,
      resetPasswordExpires: { $gt: Date.now() },
    })
    .select("+password");
  if (!user) return next(new CustomError("Token not found or expired", 400));

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save({ validateBeforeSave: true });

  res.status(200).json({
    success: true,
    message: "Password reset successfully",
  });
});

//get user = api/v1/profile
export const getUserProfile = catchAsyncError(async (req, res, next) => {
  const user = await userModel
    .findById(req.user.id)
    .select("-password -isadmin");
  if (!user) return next(new CustomError("Login to get the info", 401));

  res.status(200).json({ success: false, data: user });
});

//get user = api/v1/users
export const getAllUser = catchAsyncError(async (req, res, next) => {
  const user = await userModel
    .findById(req.user.id)
    .select("-password -isadmin");
  if (!user) return next(new CustomError("Login to get the info", 401));

  const users = await userModel.find({ _id: { $ne: req.user.id } });

  res.status(200).json({ success: true, data: users });
});

// upload image = api/v1/image

export const uploadImage = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);

  if (!user) return next(new CustomError("Login to access this resourse", 401));

  if (!req.files)
    return next(new CustomError("Please provide image to upload", 400));

  const file = req.files.image;

  if (!file.mimetype.includes("image")) {
    return next(new CustomError("Please provide a image", 400));
  }

  let fileDb = await fileModel.findOne({ user: req.user.id });

  const compresedBuffer = await sharp(fileDb.data)
    .resize({ width: 800 })
    .jpeg({ quality: 50 })
    .toBuffer();
  if (fileDb) {
    fileDb.mimeType = file.mimetype;
    fileDb.data = compresedBuffer;
    fileDb = await fileDb.save();
  } else {
    fileDb = await fileModel.create({
      user: req.user.id,
      data: compresedBuffer,
      mimeType: file.mimetype,
    });
  }

  const base64Image = fileDb.data.toString("base64");
  const dataUrl = `data:${fileDb.mimeType};base64,${base64Image}`;

  res.status(200).json({
    success: true,
    message: "Image uploaded successfully",
    image: dataUrl,
  });
});

//get image = api/v1/image

export const getImage = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  if (!user) return next(new CustomError("Login to access this resourse", 401));

  const fileDb = await fileModel.findOne({ user: req.user.id });
  if (!fileDb) return next(new CustomError("File not Found", 404));

  const base64Image = fileDb.data.toString("base64");
  const dataUrl = `data:${fileDb.mimeType};base64,${base64Image}`;

  res.status(200).json({
    success: true,
    message: "Image uploaded successfully",
    image: dataUrl,
  });
});

// is user logged in = /api/v1/islogin
export const isUserLoggedIn = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  if (user) {
    res.status(200).json({ success: true });
  } else res.status(401).json({ success: false });
});

// add to user following  = /api/v1/follow/
export const followRequest = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  if (!user) return next(new CustomError("Login to access this resourse", 401));
  const isExist = await followingRequestModel.findOneAndDelete({
    followingUserId: req.body.id,
  });
  if (isExist)
    return res
      .status(200)
      .json({ success: true, message: "Canceled successfully" });

  await followingRequestModel.create({
    user: req.user.id,
    followingUserId: req.body.id,
  });

  await followRequestModel.create({
    user: req.body.id,
    followerUserId: req.user.id,
  });

  res.status(200).json({ success: true, message: "Requested successfully" });
});

// get all follow reqest = api/v1/followingResquest
export const getFollowingRequest = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  if (!user) return next(new CustomError("Login to access this resourse", 401));

  const followings = await followingRequestModel.find({ user: req.user.id });

  if (followings.length === 0)
    return next(new CustomError("Followings not found", 404));
  res.status(200).json({
    success: true,
    data: followings,
  });
});

// get all follow reqest = api/v1/followerResquest
export const getFollowReq = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  if (!user) return next(new CustomError("Login to access this resourse", 401));

  const follower = await followRequestModel.find({ user: req.user.id });

  if (follower.length === 0)
    return next(new CustomError("Followers not found", 404));
  res.status(200).json({
    success: true,
    data: followings,
  });
});
