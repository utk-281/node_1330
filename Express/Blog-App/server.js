const express = require("express");
const { PORT } = require("./config");
const { connectDB } = require("./config/database");

const blogRoutes = require("./routers/blogs.router");
const userRoutes = require("./routers/users.router");
//! database connection
connectDB();

const app = express();

//! middlewares
app.use(express.json());

//! routes
app.use("/blogs", blogRoutes);
app.use("/users", userRoutes);

app.listen(PORT, (err) => {
  if (err) console.log("error occurred while starting server", err);
  console.log("server running on port", PORT);
});
