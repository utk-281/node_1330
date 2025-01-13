const jwt = require("jsonwebtoken");
const USER_SCHEMA = require("../models/users.model");

exports.authenticate = async (req, res, next) => {
  //   console.log(req);
  console.log(req.cookies);
  let cookie = req?.cookies?.myCookie;
  if (!cookie) return res.status(400).json({ message: "please log in first" });

  // next();
  //! decoding he token
  let decodedToken = jwt.decode(cookie, "secret"); // secret key is case sensitive
  console.log(decodedToken);
  // { id: '6780e64b5f0c83f309951bff', iat: 1736758063, exp: 1737362863 }

  //! finding the user
  let myUser = await USER_SCHEMA.findById(decodedToken.id);
  console.log(myUser);

  //! modifying the request object
  req.myUser = myUser;
  next();
};
