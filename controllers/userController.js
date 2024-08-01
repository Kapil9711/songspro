import userModel from "../models/user.js";

export const register = async (req, res, next) => {
  const user = await userModel.create(req.body);
  res.status(200).json({
    success: true,
    message: "Registered successfully",
    user,
  });
};
