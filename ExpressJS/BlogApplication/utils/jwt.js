const jwt = require("jsonwebtoken");

exports.generateToken = async (id) => {
  return jwt.sign({ id }, "secret", {
    expiresIn: "7d", // 1*60*60*1000 (pass in milliseconds)
  });
};

//! sign() is used to generate token, it accepts three parameters
//! 1) payload --> to generate token on the basis of payload
//! 2) secret key --> used in encryption and decryption process
//! 3) option : expiresIn --> sets the expiry for the token in days
