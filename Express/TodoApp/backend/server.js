const express = require("express");
const { PORT } = require("./config");
const { connectDB } = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRoutes = require("./routers/users.router");
const todoRoutes = require("./routers/todos.router");
const { error } = require("./middlewares/errors.middleware");

connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

app.use(error);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port 9000");
});
