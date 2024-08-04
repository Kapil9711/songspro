import express from "express";
import { addFav, getAllFav, removeFav } from "../controllers/favController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.route("/fav/new").post(isAuthenticated, addFav);

router.route("/favs").get(isAuthenticated, getAllFav);
router.route("/fav/:id").delete(isAuthenticated, removeFav);

export default router;
