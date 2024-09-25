exports.error = (err, req, res, next) => {
  //! global error handler
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal server error";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    stack: err.stack,
  });
};
