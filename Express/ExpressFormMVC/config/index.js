require("dotenv").config();
//! dotenv module is used to read all the contents of .env file and config() is used to parse the data

//! process.env._____ is used to load the variables on system environment.

module.exports = {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
};
