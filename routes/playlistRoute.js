import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  addSongToPlaylist,
  createPlaylist,
  getAllPlaylist,
} from "../controllers/playlistController.js";

const router = express.Router();

router.route("/playlist/new").post(isAuthenticated, createPlaylist);
router.route("/playlists").get(isAuthenticated, getAllPlaylist);
router.route("/addSong/:id").put(isAuthenticated, addSongToPlaylist);

export default router;
