import { Schema, model } from "mongoose";

const fileSchema = new Schema({
  mimeType: {
    type: String,
  },
  data: {
    type: Buffer,
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: [true, "User id is required to save a file"],
  },
});

const fileModel = model("File", fileSchema);

export default fileModel;
