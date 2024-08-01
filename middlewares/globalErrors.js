const errors = (err, req, res, next) => {
  let message = err.message || "Internal Server Error";
  let statusCode = err.statusCode || 500;
  if (err.name === "ValidationError") {
    message = message.slice(err.message.lastIndexOf(":") + 1).trim();
  }
  res.status(statusCode).json({
    success: false,
    message: message,
  });
};

export default errors;
