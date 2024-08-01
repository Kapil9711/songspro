import express from "express";
const router = express.Router();

import { register, verifyEmail } from "../controllers/userController.js";

router.route("/register").post(register);
router.route("/verify/:token").get(verifyEmail);

export default router;
