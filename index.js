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

/*====Static Files====
 1. public
 ==============*/
import __dirname from "./getDir.js";
import path from "path";
app.use(express.static(path.join(__dirname, "public")));

/*====Routes====
 1. userRoute
 2. fav Route
 ==============*/
import userRoutes from "./routes/userRoute.js";
import favRoutes from "./routes/favRoute.js";

app.use("/api/v1", userRoutes);
app.use("/api/v1", favRoutes);

// all routes should redirect to this
app.use("/*", (req, res, next) => {
  res.send("Route not found");
});
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
