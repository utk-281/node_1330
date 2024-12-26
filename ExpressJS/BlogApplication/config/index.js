//! import dotenv module
require("dotenv").config();

//! ==> dotenv modules helps to read the data/ variables from .env file
//! config() is used for parsing the data.

module.exports = {
  PORT: process.env.PORT, // 9000
  MONGODB_URL: process.env.MONGODB_URL, // " "
};

//! here, we are accessing the env variables through process.env.Variable_Name and loading it into our code.
