import CustomError from "../utils/CustomError.js";

const errors = (err, req, res, next) => {
  let message = err.message || "Internal Server Error";
  let statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV == "development") {
    res.status(statusCode).json({
      success: false,
      message,
      stack: err.stack,
      error: err,
    });
  }

  if (process.env.NODE_ENV == "production") {
    let errorCopy = { statusCode, message };
    console.log(err.name);

    if (err.code === 11000) {
      message = `${Object.keys(err.keyValue)} already exists`;
      errorCopy = new CustomError(message, 400);
    }
    if (err.name === "ValidationError") {
      message = message.slice(err.message.lastIndexOf(":") + 1).trim();
      errorCopy = new CustomError(message, 400);
    }
    res.status(errorCopy.statusCode).json({
      success: false,
      message: errorCopy.message,
    });
  }
};

export default errors;
