const USER_SCHEMA = require("../models/users.model");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/jwt");
const { ErrorHandler } = require("../utils/ErrorHandler");
const { uploadOnCloudinary, deleteProfilePicture } = require("../utils/cloudinary");

//! user functionality
//! ================================ register user =======================================
exports.registerUser = asyncHandler(async (req, res, next) => {
  let { name, email, password, role } = req.body;

  console.log(req.files);

  /* const profilePictureLocalPath = req?.files?.profilePicture?.[0]?.path;
  const signatureLocalPath = req?.files?.signature?.[0]?.path;

  const uploadProfilePicture = await uploadOnCloudinary(profilePictureLocalPath);
  const uploadSignature = await uploadOnCloudinary(signatureLocalPath);
 */
  let profilePicturePath = await uploadOnCloudinary(req?.file?.path);

  let existingUser = await USER_SCHEMA.findOne({ email });
  if (existingUser) {
    return next(new ErrorHandler("user already exists, please use another email", 409));
  }

  let newUser = await USER_SCHEMA.create({
    name,
    email,
    password,
    role,
    profilePicture:
      profilePicturePath?.url || "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    /* signature: uploadSignature?.url || "https://cdn-icons-png.flaticon.com/512/149/149071.png", */
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
    httpOnly: true,
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

//! =========================forgot user password =========================
exports.forgotPassword = asyncHandler(async (req, res) => {
  let { email } = req.body;

  let findUser = await USER_SCHEMA.findOne({ email });
  if (!findUser) return next(new ErrorHandler("user not found", 404));

  // email ==> mail

  let message = `<h1>Click below link to reset your password</h1>`;

  let subject = `reset password link`;

  sendEmail(email, message, subject);
});

//! delete user ==> user
exports.deleteUserProfile = async (req, res) => {
  let id = req.foundUser._id;
  await USER_SCHEMA.deleteOne({ _id: id });
  res.status(200).json({ success: true, message: "user deleted successfully" });
};

//! update user profile picture
exports.updateProfilePicture = asyncHandler(async (req, res, next) => {
  let id = req.foundUser._id;

  let findUser = await USER_SCHEMA.findOne({ _id: id });

  if (!findUser) throw next(new ErrorHandler("user not found", 404));

  // http://res.cloudinary.com/dmqwvd39n/image/upload/v1728031992/sgalgg0e5ipkfr3y2mh3.png
  //"https://cdn-icons-png.flaticon.com/512/149/149071.png"
  if (findUser.profilePicture && findUser.profilePicture.includes("http")) {
    let publicID = findUser.profilePicture.split("/").pop().split(".")[0];
    console.log(publicID);
    await deleteProfilePicture(publicID);
  }

  let newProfilePicturePath = req?.file?.path;
  console.log(newProfilePicturePath);

  let uploadedPath = await uploadOnCloudinary(newProfilePicturePath);

  findUser.profilePicture = uploadedPath?.url;
  await findUser.save();

  res.status(200).json({
    success: true,
    message: "profile picture updated successfully",
    data: findUser,
  });
});

//! remove profile picture
exports.removeProfilePicture = asyncHandler(async (req, res, next) => {
  console.log(req.foundUser);
  let id = req.foundUser._id;

  let findUser = await USER_SCHEMA.findOne({ _id: id });

  if (!findUser) return next(new ErrorHandler("user not found", 404));

  if (findUser.profilePicture) {
    let publicID = findUser.profilePicture.split("/").pop().split(".")[0];
    console.log(publicID);
    await deleteProfilePicture(publicID);
  }

  findUser.profilePicture = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  await findUser.save();

  res.status(200).json({
    success: true,
    message: "profile picture removed successfully",
    data: findUser,
  });
});

// ? http://res.cloudinary.com/dmqwvd39n/image/upload/v1728289233/fuwqypy7bolxvjqofpap.jpg

/* 
  [
    "http",
    "res.cloudinary.com",
    "dmqwvd39n",
    "image",
    "upload",
    "v1728031992",
    "sgalgg0e5ipkfr3y2mh3.png"
  ]

  [
    "sgalgg0e5ipkfr3y2mh3",
    "png"
    ]
 */

//! get current user

exports.getCurrentUser = asyncHandler(async (req, res) => {
  let id = req.foundUser._id;

  let findUser = await USER_SCHEMA.findOne({ _id: id });

  if (!findUser) return res.status(200).json({ success: false, message: "user not logged in" });

  res.status(200).json({ success: true, message: "user found" });

  //! http://localhost:9000/users/v1/add ==> api / restful api
});

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

  let updateUser = await USER_SCHEMA.updateOne({ _id: id }, { $set: { role: role } });

  // findUser.role = role;
  // await findUser.save();

  res.status(200).json({ success: true, message: "user role updated successfully" });
});
