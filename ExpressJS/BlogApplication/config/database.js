const mongoose = require("mongoose");
const { MONGODB_URL } = require(".");

const connectDB = async () => {
  await mongoose.connect(MONGODB_URL);
  console.log("database connected");
};

module.exports = {
  connectDB,
};
