const express = require("express");
const { PORT } = require("./config");
const { connectDB } = require("./config/db");

const userRoutes = require("./routers/users.router");

//! database connection
connectDB();

const app = express();

//! middleware section
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! router section
app.use("/users", userRoutes);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port 9000");
});
