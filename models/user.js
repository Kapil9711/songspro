import { Schema, model } from "mongoose";
import validator, { isEAN } from "validator";

const options = {
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [6, "Username should have length between 6 and 15"],
    maxlength: [15, "Username should have length between 6 and 15"],
    unique: [true, "username already taken try different one"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (props) => `${props.value} is not valid email`,
    },
  },

  passsword: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password should have 8 character"],
  },
  resetPasswordToken: String,
  resetPasswordExpires: String,
};

const userSchema = new Schema(options, { timestamps: true });

const userModel = model("User", userSchema);

export default userModel;
