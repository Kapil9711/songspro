import express from "express";
const router = express.Router();

import { login, register, verifyEmail } from "../controllers/userController.js";

router.route("/register").post(register);
router.route("/verify/:token").get(verifyEmail);
router.route("/login").post(login);

export default router;
