import userModel from "../models/user.js";
import catchAsyncError from "../utils/catchAsyncError.js";
import sendEmail from "../utils/sendEmail.js";
import getEmailMessage from "../utils/getEmailMessage.js";
import CustomError from "../utils/CustomError.js";
import jwt from "jsonwebtoken";
import getLoginQuery from "../utils/getLoginQuery.js";
import sendToken from "../utils/sendToken.js";

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
