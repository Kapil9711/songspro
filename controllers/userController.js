import userModel from "../models/user.js";
import catchAsyncError from "../utils/catchAsyncError.js";

export const register = catchAsyncError(async (req, res, next) => {
  const user = await userModel.create(req.body);
  res.status(200).json({
    success: true,
    message: "Registered successfully",
    user,
  });
});
