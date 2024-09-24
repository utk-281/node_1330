const USER_SCHEMA = require("../models/users.model");
const asyncHandler = require("express-async-handler");
const { ErrorHandler } = require("../utils/ErrorHandler");
const { generateToken } = require("../utils/jwt");

//! user functionality
//! ================================ register user =======================================
exports.registerUser = asyncHandler(async (req, res, next) => {
  let { name, email, password, role } = req.body;

  let existingUser = await USER_SCHEMA.findOne({ email });
  if (existingUser) {
    return next(new ErrorHandler("User already exists", 409));
  }

  let newUser = await USER_SCHEMA.create({
    name,
    email,
    password,
    role,
  });

  res.status(201).json({
    success: true,
    message: "user created successfully",
    data: newUser,
  });
});

//! ================================ login user =======================================

exports.loginUser = asyncHandler(async (req, res, next) => {
  let { email, password } = req.body;

  let existingUser = await USER_SCHEMA.findOne({ email });
  if (!existingUser) {
    return next(new ErrorHandler("User not found", 404));
  }

  let isPasswordMatched = await existingUser.matchPassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Incorrect password", 401));
  }

  let token = generateToken(existingUser._id);
  console.log(token);

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    token: token,
  });
});

//! ================================ logout user =======================================

exports.logoutUser = async (req, res) => {
  res.clearCookie("token", "", {
    maxAge: Date.now(),
  });

  res.status(200).json({
    success: true,
    message: "user logged out",
  });
};

exports.updateUserProfile = async (req, res) => {};
exports.updateUserPassword = async (req, res) => {};
exports.deleteUserProfile = async (req, res) => {};

//! admin functionality
exports.fetchAllUsers = async (req, res) => {};
exports.fetchSingleUser = async (req, res) => {};
exports.deleteUser = async (req, res) => {};
exports.updateUser = async (req, res) => {};
