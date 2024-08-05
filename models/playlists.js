import mongoose, { Schema, model } from "mongoose";

const SongSchema = new Schema({
  songName: {
    type: String,
    required: true,
  },
  songId: {
    type: String,
    required: true,
  },
  songImage: {
    type: String,
    required: false,
  },
});

const playlistSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    minlength: [6, "Should have 6 characters"],
  },
  songs: [SongSchema],
  user: {
    type: Schema.ObjectId,
    ref: "user",
    required: [true, "User id is required"],
  },
});

const playlistModel = model("Playlist", playlistSchema);

export default playlistModel;
