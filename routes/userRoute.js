import express from "express";
const router = express.Router();

import { register } from "../controllers/userController.js";

router.route("/register").post(register);

export default router;
