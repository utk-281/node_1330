const express = require("express");

const { connectDB } = require("./config/database");

//! this step wil import dotenv module which helps in reading the contents of .env file and config() is used to parse the contents of .env file
require("dotenv").config();

//! connectDB
connectDB();

const app = express();

app.listen(process.env.PORT, (err) => {
  // process.env.PORT is reading the PORT variable from system environment variable
  if (err) throw err;
  console.log(`server is running at http://localhost:${process.env.PORT}`);
});
