const { ErrorHandler } = require("../utils/ErrorHandler");

exports.error = (err, req, res, next) => {
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "invalid mongodb id",
      error: err.message,
    });
  }

  //! global error handler
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal server error";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    stack: err.stack,
  });
};
