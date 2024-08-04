import mongoose, { Schema, model } from "mongoose";

const favSchema = new Schema({
  songId: {
    type: String,
    required: [true, "SongId is required"],
  },
  songName: {
    type: String,
    required: [true, "songName is Required"],
  },
  songImage: {
    type: String,
    required: [true, "songImage is required"],
  },
  user: {
    type: Schema.ObjectId,
    ref: "user",
    required: [true, "User id is required"],
  },
});

const favModel = model("Favrotes", favSchema);

export default favModel;
