const express = require("express");
const { PORT, MONGODB_URL } = require("./config");
const { connectDB } = require("./config/database");

connectDB();

const app = express();

// console.log(PORT, MONGODB_URL);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port 9000");
});
