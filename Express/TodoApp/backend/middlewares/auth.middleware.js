const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const USER_SCHEMA = require("../models/users.model");

exports.authenticate = async (req, res, next) => {
  console.log(req.cookies);
  let cookie = req?.cookies?.cookie;

  if (!cookie) {
    return res.status(400).json({ message: "please log in to access this" });
  }

  let decodedToken = jwt.verify(cookie, JWT_SECRET);
  console.log(decodedToken);
  let myUser = await USER_SCHEMA.findOne({ _id: decodedToken.id });
  console.log(myUser);
  req.foundUser = myUser;
  next();
};
