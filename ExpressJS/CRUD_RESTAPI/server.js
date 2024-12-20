let express = require("express");
const { connectDB } = require("./config/database");
const userRoutes = require("./routes/users.route");

connectDB();

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users/v1", userRoutes);

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running....");
});
