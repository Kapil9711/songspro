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
      message:
        "Verification mail sent successfully, check your inbox and verify the email",
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

// upload image = api/v1/image

export const uploadImage = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);

  if (!user) return next(new CustomError("Login to access this resourse", 401));

  if (!req.files)
    return next(new CustomError("Please provide image to upload", 400));

  const file = req.files.image;

  file.name = "img" + user._id + file.name;
  const fileDb = await fileModel.findOne({ user: req.user.id });

  const compresedBuffer = await sharp(fileDb.data)
    .resize({ width: 800 })
    .jpeg({ quality: 50 })
    .toBuffer();

  user.image = file.name;
  await user.save({ validateBeforeSave: true });

  if (!fileDb) {
    await fileModel.create({
      filename: file.name,
      data: compresedBuffer,
      mimetype: file.mimetype,
      user: req.user.id,
    });
    res.status(201).json({
      success: true,
      message: "uploaded successfully",
    });
  } else {
    await fileModel.findByIdAndUpdate(fileDb._id, {
      filename: file.name,
      data: compresedBuffer,
      mimetype: file.mimetype,
    });
    res.status(201).json({
      success: true,
      message: "changed successfully",
    });
  }
});

//get image = api/v1/image

export const getImage = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  if (!user) return next(new CustomError("Login to access this resourse", 401));

  const fileDb = await fileModel.findOne({ user: req.user.id });
  if (!fileDb) return next(new CustomError("File not Found", 404));

  const uploadPath = "/temp/" + fileDb.filename;
  res.setHeader("Content-Type", "image/jpeg");
  res.setHeader(
    "Content-Disposition",
    'attachment; filename="userProfile.jpg"'
  );

  fs.writeFile(uploadPath, fileDb.data, (err, data) => {
    if (err) return next(new CustomError("Internal server error", 500));
    const readStream = fs.createReadStream(uploadPath);
    readStream.pipe(res);
  });
});

// is user logged in = /api/v1/islogin
export const isUserLoggedIn = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  if (user) {
    res.status(200).json({ success: true });
  } else res.status(401).json({ success: false });
});
