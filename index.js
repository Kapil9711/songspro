import "dotenv/config";
import express from "express";
const app = express();

/*===Parsers===
 1 body-parser
 2 cookie-parser
 ============*/
import cookieParser from "cookie-parser";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/*====Routes====
 1. userRoute
 2.
 ==============*/
import userRoutes from "./routes/userRoute.js";

app.use("/api/v1", userRoutes);

/*====GlobalError=====*/
import errors from "./middlewares/globalErrors.js";
app.use(errors);

/*======Server========
 1. connecting to db
 2. starting server
 ==============*/
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
