const USER_SCHEMA = require("../models/users.model");
const { generateToken } = require("../utils/generateJwt");

exports.addUser = async (req, res) => {
  try {
    let { email } = req.body;
    let existingUser = await USER_SCHEMA.findOne({ email });

    if (existingUser)
      return res.status(400).json({
        success: false,
        message: "email already registered",
      });

    let newUser = await USER_SCHEMA.create(req.body);

    let findUser = await USER_SCHEMA.findOne({ _id: newUser._id }).select("-password"); // syntax ==> select("-fieldName1 -fieldName2 ....") to hide any field in response

    res.status(201).json({ success: true, message: "user account created", data: findUser });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "user not added",
      error: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    let findUser = await USER_SCHEMA.findOne({ email });
    if (!findUser)
      return res
        .status(200)
        .json({ success: false, message: "no such email registered, please create an account" });

    let isMatched = await findUser.comparePassword(password);

    if (!isMatched) return res.status(401).json({ success: false, message: "wrong password" });

    let token = generateToken(findUser._id);
    console.log(token);

    res.status(200).json({
      success: true,
      message: "user logged in",
      tokenGenerated: token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error occurred while logging in",
      error: error.message,
    });
  }
};

exports.fetchAllUsers = async (req, res) => {
  try {
    let allUsers = await USER_SCHEMA.find({}); // allUsers will be an array of objects

    if (allUsers.length === 0) res.status(200).json({ success: true, message: "no user found" });

    res.status(200).json({
      success: true,
      message: "users fetched successfully",
      numberOfUsers: allUsers.length,
      data: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while fetching all users",
      error: error.message,
    });
  }
};

exports.fetchOneUser = async (req, res) => {
  try {
    let findUser = await USER_SCHEMA.findOne({ _id: req.params.id });

    if (!findUser) return res.status(200).json({ message: "no user found" });

    res.status(200).json({
      success: true,
      message: "user fetched successfully",
      data: findUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "cannot fetch single user",
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    let findUser = await USER_SCHEMA.findOne({ _id: req.params.id });

    if (!findUser) return res.status(200).json({ message: "no user found" });

    /*  let updateUser = await USER_SCHEMA.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
      }
    ); this method will not save the new password in hashed form */

    findUser.name = req.body.name || findUser.name;
    findUser.email = req.body.email || findUser.email;
    findUser.password = req.body.password || findUser.password;
    await findUser.save(); // since we are using save(), pre--hook function will get executed.

    res.status(200).json({
      success: true,
      message: "user updated successfully",
      data: findUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "cannot fetch single user",
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let findUser = await USER_SCHEMA.findOne({ _id: req.params.id });

    if (!findUser) return res.status(200).json({ message: "no user found" });

    await USER_SCHEMA.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: "user deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "cannot fetch single user",
      error: error.message,
    });
  }
};
