const USER_SCHEMA = require("../models/user.model");

const addUser = async (req, res) => {
  console.log(req.body);
  let { name, email, password, phoneNo } = req.body;
  console.log(name, email, password, phoneNo);
  let payload = req.body;
  /* {
    name:"",
    email:"".....
  } */
  let newUser = await USER_SCHEMA.create(payload);
  res.json({ success: true, message: "user created successfully", data: newUser });
};

module.exports = {
  addUser,
};
