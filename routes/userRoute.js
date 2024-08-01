import express from "express";
const router = express.Router();

import {
  forgotPassword,
  login,
  register,
  resetPassword,
  verifyEmail,
} from "../controllers/userController.js";

router.route("/register").post(register);
router.route("/verify/:token").get(verifyEmail);
router.route("/login").post(login);
router.route("/password/forgot").put(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

export default router;
