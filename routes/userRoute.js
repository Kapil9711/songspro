import express from "express";
const router = express.Router();
import fileUpload from "express-fileupload";
import {
  forgotPassword,
  getImage,
  uploadImage,
  getUserProfile,
  login,
  register,
  resetPassword,
  verifyEmail,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

router.route("/register").post(register);
router.route("/verify/:token").get(verifyEmail);
router.route("/login").post(login);
router.route("/password/forgot").put(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/profile").get(isAuthenticated, getUserProfile);

router
  .route("/image")
  .get(isAuthenticated, getImage)
  .post(isAuthenticated, fileUpload(), uploadImage);

export default router;
