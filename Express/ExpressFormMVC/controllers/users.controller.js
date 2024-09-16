const USER_SCHEMA = require("../models/users.model");

/*
 ! @description : add user
 ! method : POST
 ! endpoint : /users/add
 */
exports.addUser = async (req, res) => {
  let { name, email, password, phoneNo } = req.body;

  let newUser = await USER_SCHEMA.create({ name, email, password, phoneNo });
  //! response message
  res.status(201).json({ success: true, message: "user account created", data: newUser });
};

/*
 ! @description : fetch all users
 ! method : GET
 ! endpoint : /users/all
 */
exports.fetchAllUsers = async (req, res) => {
  // fetch all users
  let users = await USER_SCHEMA.find({});
  // send a response
  res.status(200).json({ success: true, message: "users fetched", data: users });
};

/*
 ! @description : fetch single user
 ! method : GET
 ! endpoint : /users/one/:id
 */
exports.fetchOneUser = async (req, res) => {
  console.log(req.params);
  console.log(req.params.id);

  let id = req.params.id;

  let findUser = await USER_SCHEMA.findOne({ _id: id });

  res.status(200).json({ success: true, message: "user fetched", data: findUser });
};

/*
 ! @description : update a  user
 ! method : put/patch
 ! endpoint : /users/update/:id
 */
exports.updateUser = async (req, res) => {
  let { id } = req.params;

  let updateUser = await USER_SCHEMA.updateOne(
    { _id: id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNo: req.body.phoneNo,
      },
    }
  );

  res.status(200).json({ success: true, message: "user updated", data: updateUser });
};

/*
 ! @description : delete a  user
 ! method : delete
 ! endpoint : /users/delete/:id
 */
exports.deleteUser = async (req, res) => {
  let { id } = req.params;

  let deleteUser = await USER_SCHEMA.deleteOne({ _id: id });

  res.status(200).json({ success: true, message: "user deleted" });
};
