const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/crud_API");
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
