import mongoose, { Schema, model } from "mongoose";

const followerSchema = new Schema({
  followerUserId: {
    type: String,
    required: [true, "follower userid is required"],
  },
  user: {
    type: Schema.ObjectId,
    ref: "user",
    required: [true, "User id is required"],
  },
});

const followingSchema = new Schema({
  followingUserId: {
    type: String,
    required: [true, "following Userid is Required"],
  },
  user: {
    type: Schema.ObjectId,
    ref: "user",
    required: [true, "User id is required"],
  },
});

const followRequestSchema = new Schema({
  followerUserId: {
    type: String,
    required: [true, "follower userid is Required"],
  },
  user: {
    type: Schema.ObjectId,
    ref: "user",
    required: [true, "User id is required"],
  },
});

const followingRequestSchema = new Schema({
  followingUserId: {
    type: String,
    required: [true, "following Userid is Required"],
  },
  user: {
    type: Schema.ObjectId,
    ref: "user",
    required: [true, "User id is required"],
  },
});

const followerModel = model("Follower", followerSchema);
const followingModel = model("Following", followingSchema);
const followRequestModel = model("FollowRequest", followRequestSchema);
const followingRequestModel = model("FollowingRequest", followingRequestSchema);

export {
  followerModel,
  followingModel,
  followingRequestModel,
  followRequestModel,
};
