import "dotenv/config";
import express from "express";
const app = express();

/*
 ==============
 1. connecting to db
 2. starting server
 ==============
*/
import connectDB from "./Db/db.js";

const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log("Listening on Port", PORT, "in", MODE, "mode")
    );
  } catch (error) {
    console.log("Aborting server due to problem in connection to db");
  }
};

start();
