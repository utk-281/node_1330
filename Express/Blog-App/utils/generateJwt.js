const jwt = require("jsonwebtoken");

exports.generateToken = (id) => {
  return jwt.sign({ id }, "secret-key", {
    expiresIn: "1d",
  });
};

// sign()==> will generate a token based on the user's _id and a secret key
