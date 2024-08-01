class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor); // it will add error stack on instance of Error and remove  this.constructor(class itslef) from stack trace which help in security;
  }
}

export default CustomError;
