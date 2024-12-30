//! import the schema/ collection

const USER_SCHEMA = require("../models/users.model");

exports.registerUser = async (req, res) => {
  try {
    //! destructure the data
    let { name, email, password, phoneNo, role } = req.body;
    //! add data in database
    let newUser = await USER_SCHEMA.create({
      name,
      email,
      password,
      phoneNo,
      role,
    });
    console.log(newUser);
    //! send response
    res.status(201).json({ success: true, message: "user registered successfully", newUser });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

exports.fetchAllUser = async (req, res) => {
  try {
    let users = await USER_SCHEMA.find();

    if (users.length === 0) return res.json({ message: "no users present" });

    res
      .status(200)
      .json({ success: true, message: "users fetched successfully", count: users.length, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.fetchOneUser = async (req, res) => {
  try {
    let { id } = req.params;

    let user = await USER_SCHEMA.findOne({ _id: id });

    if (!user) return res.status(404).json({ message: "no user found" });

    res.status(200).json({ success: true, message: "user fetched", user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
