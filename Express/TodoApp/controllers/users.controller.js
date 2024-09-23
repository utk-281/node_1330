const USER_SCHEMA = require("../models/users.model");
const asyncHandler = require("express-async-handler");
const { ErrorHandler } = require("../utils/ErrorHandler");

exports.registerUser = asyncHandler(async (req, res, next) => {
  // while uploading picture, it won't be in req.body
  const { name, email, password, role } = req.body;

  let existingUser = await USER_SCHEMA.findOne({ email });

  if (existingUser) {
    throw new ErrorHandler(400, "User already exists");
  }

  let newUser = await USER_SCHEMA.create({ name, email, password, role });

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser,
  });
});
