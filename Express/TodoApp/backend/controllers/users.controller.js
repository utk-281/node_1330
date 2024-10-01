const USER_SCHEMA = require("../models/users.model");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/jwt");
const { ErrorHandler } = require("../utils/ErrorHandler");

//! user functionality
//! ================================ register user =======================================
exports.registerUser = asyncHandler(async (req, res, next) => {
  console.log(req.file);
  console.log(req.file.path);
  let { name, email, password, role } = req.body;

  let existingUser = await USER_SCHEMA.findOne({ email });
  if (existingUser) {
    return next(new ErrorHandler("user already exists, please use another email", 409));
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
    return next(new ErrorHandler("Email not found", 401));
  }

  let isPasswordMatched = await existingUser.matchPassword(password);

  if (!isPasswordMatched) {
    return res.json({ message: "invalid password" });
  }

  let token = generateToken(existingUser._id);
  console.log(token);

  res.cookie("cookie", token, {
    // httpOnly: true,
    maxAge: 1 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    token: token,
  });
});

//! ================================ logout user =======================================

exports.logoutUser = async (req, res) => {
  res.clearCookie("cookie", "", {
    maxAge: Date.now(),
    sameSite: "lax", // Add sameSite if used while setting the cookie
    secure: false, // Use true if you're using HTTPS, otherwise false
    path: "/", // Ensure this matches the path where the cookie was set
  });

  res.status(200).json({
    success: true,
    message: "user logged out",
  });
};

//! ================================ update user profile=======================================

exports.updateUserProfile = asyncHandler(async (req, res) => {
  let id = req.foundUser._id; //66f51ee920886964482d77c1

  let { name, email } = req.body;

  let updateUser = await USER_SCHEMA.updateOne({ _id: id }, { $set: { name, email } });

  res.status(200).json({
    success: true,
    message: "user updated successfully",
  });
});

//! ================================ update user password=======================================

exports.updateUserPassword = asyncHandler(async (req, res) => {
  let id = req.foundUser._id;
  let findUser = await USER_SCHEMA.findOne({ _id: id });
  let { newPassword, oldPassword } = req.body;

  if (!newPassword || !oldPassword) {
    return next(new ErrorHandler("please enter new password and old password", 401));
  }

  let isPasswordMatched = await findUser.matchPassword(oldPassword);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("old password is incorrect", 401));
  }

  findUser.password = newPassword;
  await findUser.save();

  res.status(200).json({
    success: true,
    message: "user password updated successfully",
  });
});

//! delete user ==> user
exports.deleteUserProfile = async (req, res) => {
  let id = req.foundUser._id;
  await USER_SCHEMA.deleteOne({ _id: id });
  res.status(200).json({ success: true, message: "user deleted successfully" });
};

//! ================================== admin functionality

//! fetch all
exports.fetchAllUsers = asyncHandler(async (req, res, next) => {
  let users = await USER_SCHEMA.find();

  if (users.length === 0) {
    return next(new ErrorHandler("no user found", 404));
  }

  res.status(200).json({ success: true, message: "all users fetched", users: users });
});

//! fetch one user
exports.fetchSingleUser = asyncHandler(async (req, res, next) => {
  let id = req.params.id;
  let findUser = await USER_SCHEMA.findOne({ _id: id });

  if (!findUser) {
    return next(new ErrorHandler("user not found", 404));
  }

  res
    .status(200)
    .json({ success: true, message: "User details fetched successfully", data: findUser });
});

//! delete user ==> admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  let findUser = await USER_SCHEMA.findOne({ _id: req.params.id });
  if (!findUser) return next(new ErrorHandler("no user found", 400));

  await USER_SCHEMA.deleteOne({ _id: req.params.id });

  res.status(200).json({ success: true, message: "user deleted successfully" });
});

//! update user role
exports.updateUserRole = asyncHandler(async (req, res, next) => {
  let id = req.params.id;
  let { role } = req.body;

  let findUser = await USER_SCHEMA.findOne({ _id: id });

  if (!findUser) return next(new ErrorHandler("no user found", 400));

  findUser.role = role;
  await findUser.save();

  res.status(200).json({ success: true, message: "user role updated successfully" });
});
