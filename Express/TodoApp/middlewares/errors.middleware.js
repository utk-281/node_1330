const { ErrorHandler } = require("../utils/ErrorHandler");

exports.error = (err, req, res, next) => {
  //! handling error
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  //response
  res.status(err.statusCode).json({
    success: false,
    message: new ErrorHandler(err.statusCode, err.message),
    stack: err.stack,
  });
};
