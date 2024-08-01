import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const options = {
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [6, "Username should have length between 6 and 15"],
    maxlength: [15, "Username should have length between 6 and 15"],
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (props) => `${props.value} is not valid email`,
    },
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password should have 8 character"],
    Select: false,
  },
  isverified: {
    type: Boolean,
    default: false,
  },
  isadmin: {
    type: Boolean,
    default: false,
    Select: false,
  },

  resetPasswordToken: String,
  resetPasswordExpires: String,
};

const userSchema = new Schema(options, { timestamps: true });

//hash the password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//generate jwt key
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

const userModel = model("User", userSchema);

export default userModel;
