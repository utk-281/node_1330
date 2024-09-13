let express = require("express");
const { connectDB } = require("./config/database");
const { PORT } = require("./config");

const userRoute = require("./routers/user.router");

let app = express();

app.use(express.json());
app.use("/api", userRoute);

connectDB();

app.listen(PORT, (err) => {
  if (err) console.log("error while connecting to the server", er);
  console.log("server running...");
});

// http://localhost:9000/login/  ==> api
