const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phoneNo: {
    type: Number,
  },
});

module.exports = mongoose.model("User", userSchema);
//! users collection will be created in the database  ==> this conversion will be done by mongoose (lowercase + plural)
