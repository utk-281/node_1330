const express = require("express");
const morgan = require("morgan");
const { PORT } = require("./config/index");
const { connectDB } = require("./config/database");
const { error } = require("./middlewares/errors.middleware");

const userRoute = require("./routers/users.router");

connectDB();

const app = express();

app.use(express.json()); // built in middleware

app.use(morgan("dev")); // third party middleware

app.use("/users", userRoute); // router level middleware

app.use(error); // error level middleware

app.listen(PORT, (err) => {
  if (err) console.log("error while starting the server", err);
  console.log("server running.........");
});

// application , error , routing, built in, user defined.
