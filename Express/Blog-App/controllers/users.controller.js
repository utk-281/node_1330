const USER_SCHEMA = require("../models/users.model");

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

    let findUser = await USER_SCHEMA.findOne({ _id: newUser._id }).select("-password -email");

    res.status(201).json({ success: true, message: "user account created", data: findUser });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "user not added",
      error: error.message,
    });
  }
};

exports.fetchAllUsers = async (req, res) => {};

exports.fetchOneUser = async (req, res) => {};

exports.updateUser = async (req, res) => {};

exports.deleteUser = async (req, res) => {};
