const express = require("express");
const { PORT } = require("./config");
const { connectDB } = require("./config/database");

const userRoutes = require("./routes/users.routes");
const blogRoutes = require("./routes/blogs.routes");

connectDB();

const app = express();

//! middlewares
app.use(express.json());

app.use("/v1/users", userRoutes);
app.use("/v1/blogs", blogRoutes);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port 9000");
});

//! encryption/ encrypt or hashing
