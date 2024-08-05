import jwt from "jsonwebtoken";
import CustomError from "../utils/CustomError.js";
import userModel from "../models/user.js";

export const isAuthenticated = async (req, res, next) => {
  let token;
  if (req.cookies.token) token = req.cookies.token;

  if (!token) {
    return next(
      new CustomError("Please login before accessing this information")
    );
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!decode) return next(new CustomError("login to access this", 401));
  const user = await userModel.findById(decode?.id);
  req.user = user;
  next();
};
