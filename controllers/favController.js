import catchAsyncError from "../utils/catchAsyncError.js";
import userModel from "../models/user.js";
import favModel from "../models/favorites.js";
import CustomError from "../utils/CustomError.js";

// add new fav => api/v1/fav/new
export const addFav = catchAsyncError(async (req, res, next) => {
  console.log("recved");
  const user = await userModel.findById(req.user.id);
  if (!user) return next(new CustomError("Login access this info", 401));

  const isExist = await favModel.findOne({
    songId: req.body.songId,
    user: req.user.id,
  });

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

import axios from "axios";
import Ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import bufferToStream from "buffer-to-stream";
import streamBuffers from "stream-buffers";
import path from "path";

Ffmpeg.setFfmpegPath(ffmpegInstaller.path);

// get mp3 buffer = api/v1/mp3buffer
export const getMp3Buffer = async (req, res, next) => {
  const audioUrl = req.query.url; // URL of the M4A file

  try {
    const response = await axios.get(audioUrl, { responseType: "arraybuffer" });
    const m4aBlob = Buffer.from(response.data);

    const mp3Buffer = await convertM4aBlobToMp3Buffer(m4aBlob);

    res.setHeader(
      "Content-Disposition",
      'attachment; filename="converted.mp3"'
    );
    res.setHeader("Content-Type", "audio/mpeg");
    res.send(mp3Buffer);
  } catch (error) {
    console.error("Error fetching or converting audio:", error);
    res.status(500).send("Error fetching or converting audio");
  }
};

const convertM4aBlobToMp3Buffer = (m4aBlob) => {
  return new Promise((resolve, reject) => {
    const inputStream = bufferToStream(m4aBlob);
    const writableStreamBuffer = new streamBuffers.WritableStreamBuffer();

    Ffmpeg(inputStream)
      .audioBitrate("320k")
      .toFormat("mp3")
      .on("end", () => {
        console.log("Conversion finished!");
        resolve(writableStreamBuffer.getContents());
      })
      .on("error", (err) => {
        console.error("Error during conversion:", err);
        reject(err);
      })
      .pipe(writableStreamBuffer);
  });
};
