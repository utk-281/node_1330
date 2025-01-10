//! import the schema/ collection

const USER_SCHEMA = require("../models/users.model");
const { generateToken } = require("../utils/jwt");

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

exports.updateUserDetails = async (req, res) => {
  try {
    let { id } = req.params;

    let user = await USER_SCHEMA.findOne({ _id: id });

    if (!user) return res.status(404).json({ message: "no user present" });

    await USER_SCHEMA.updateOne(
      { _id: id },
      {
        name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
      }
    );
    res.status(200).json({ success: true, message: "user updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateUserPassword = async (req, res) => {
  try {
    let { id } = req.params;
    let user = await USER_SCHEMA.findById(id);

    if (!user) return res.status(404).json({ message: "no user found" });

    user.password = req.body.password; //assign
    await user.save(); // save the new data to database

    res.status(200).json({ success: true, message: "user password updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let { id } = req.params;
    let user = await USER_SCHEMA.findById(id);
    if (!user) return res.status(404).json({ message: "no user found" });

    let deletedUser = await USER_SCHEMA.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "user deleted successfully", deletedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.loginInUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await USER_SCHEMA.findOne({ email });
    if (!user) return res.status(400).json({ message: "email not registered" });

    let isMatch = await user.comparePassword(password);
    // console.log(isMatch);
    if (!isMatch) return res.status(400).json({ message: "wrong password" });

    let token = await generateToken(user._id);
    // console.log(token);
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzI2NWFhYmY3YmRlNGMzNWE3OWIzNCIsImlhdCI6MTczNjQxNDM3NywiZXhwIjoxNzM3MDE5MTc3fQ.CsD0JFVt19GIVdff7L03UmL1nmS0XFuMHNSLM6g5wuw

    res.cookie("myCookie", token, {
      maxAge: 1 * 60 * 60 * 1000,
      httpOnly: true,
    });

    res.status(200).json({ success: true, message: "user logged in", token });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//! to handle cookies we use cookie-parser module

exports.logout = async (req, res) => {
  res.clearCookie("myCookie", "", {
    maxAge: 0,
  });
  res.status(200).json({ success: true, message: "user logged out" });
};
