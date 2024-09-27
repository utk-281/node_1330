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
  req.foundUser = myUser;
  next();
};

exports.authorize = async (req, res, next) => {
  if (req.foundUser.role === "admin") next();
  else return res.status(400).json({ message: "you are not authorized" });
};
