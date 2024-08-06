import cathcAsyncError from "../utils/catchAsyncError.js";
import playlistModel from "../models/playlists.js";
import userModel from "../models/user.js";
import CustomError from "../utils/CustomError.js";

// create playlist = api/v1/playlist/new
export const createPlaylist = cathcAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  if (!user) return next(new CustomError("Login to access this", 401));

  const isExist = await playlistModel.findOne({
    name: req.body.name,
    user: req.user.id,
  });
  if (isExist) return next(new CustomError("Playlist already exits", 404));

  const isMore = await playlist.find({ user: req.user.id });
  if (isMore.length === 8)
    return next(new CustomError("You can only create 8 playlist", 404));

  const playlist = await playlistModel.create({
    name: req.body.name,
    user: req.user.id,
  });
  if (!playlist) return next(new CustomError("Internal Serve Error", 500));
  res.status(201).json({
    success: true,
    message: "Playlist created Successfully",
  });
});

// get All Playlist = api/v1/playlists
export const getAllPlaylist = cathcAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  if (!user) return next(new CustomError("Login to access this", 401));

  const playlists = await playlistModel.find({ user: req.user.id });
  if (!playlists || playlists.length === 0)
    return next(new CustomError("Plalists not found", 404));
  res.status(201).json({
    success: true,
    data: playlists,
  });
});

// add song to playlist => api/v1/addSong/:id
export const addSongToPlaylist = cathcAsyncError(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  if (!user) return next(new CustomError("Login to access this", 401));

  if (!req.params.id)
    return next(new CustomError("Playlist id is required", 404));

  const playlist = await playlistModel.findById(req.params.id);

  if (!playlist) return next(new CustomError("Playlist is not Found"));

  const isSongExist = await playlistModel.findOne({
    user: req.user.id,
    "songs.songId": req.body.songId,
  });
  if (isSongExist) return next(new CustomError("Song already exist", 400));

  playlist.songs.push(req.body);

  const updated = await playlist.save({ validateBeforeSave: true });

  res.status(200).json({
    success: true,
    message: "Added Successfully",
    data: updated,
  });
});
