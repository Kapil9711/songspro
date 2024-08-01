import { connect } from "mongoose";

const connectDB = async (connectionStr) => {
  try {
    await connect(connectionStr);
    console.log("connection to db successfull");
  } catch (error) {
    console.log({ message: "error in connecting to db", error: error.message });
    throw new Error();
  }
};

export default connectDB;
