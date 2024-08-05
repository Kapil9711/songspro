import catchAsyncError from "../utils/catchAsyncError.js";
import userModel from "../models/user.js";
import favModel from "../models/favorites.js";
import CustomError from "../utils/CustomError.js";

// add new fav => api/v1/fav/new
export const addFav = catchAsyncError(async (req, res, next) => {
  console.log("recved");
  const user = await userModel.findById(req.user.id);
  if (!user) return next(new CustomError("Login access this info", 401));

  const isExist = await favModel.findOne({ songId: req.body.songId });

  if (isExist) return next(new CustomError("already added", 400));

  const fav = await favModel.create({ user: req.user.id, ...req.body });
  if (!fav) return next(new CustomError("Internal server error", 500));

  res.status(201).json({
    success: true,
    message: "Added successfully",
  });
});

// get all fav => api/v1/favs
export const getAllFav = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  if (!user) return next(new CustomError("Login access this info", 401));

  const fav = await favModel.find({ user: req.user.id });
  if (!fav || fav.length === 0)
    return next(new CustomError("Favorites not Found", 500));
  res.status(201).json({
    success: true,
    data: fav,
  });
});

// remove fav => api/v1/fav/:id
export const removeFav = catchAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  if (!user) return next(new CustomError("Login access this info", 401));

  const isDeleted = await favModel.findByIdAndDelete(req.params.id);
  if (!isDeleted) return next(new CustomError("Fav not found", 404));
  res.status(200).json({
    success: true,
    message: "removed successfully",
  });
});
