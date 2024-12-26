const mongoose = require("mongoose");

let MONGODB_URL = "mongodb://localhost:27017/crud_API";
const connectDB = async () => {
  await mongoose.connect(MONGODB_URL);
  console.log("database connected.........");
};

module.exports = {
  connectDB,
};

//! to connect with database we are using mongoose library
//! mongoose library is used to create schema/structure and used for validation purposes.

// mongodb://localhost:27017/dbName --> url
//! mongodb://localhost:27017/ --> url for local host
//! dbName --> database name to be created
