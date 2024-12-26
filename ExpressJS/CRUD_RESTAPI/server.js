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

//! 1) create a server using http module and define 4 endpoints contact, download, about us and a form page (it can be anything).

//! 2) project/src/backend/node/controllers/index.js
// test case --> server.version.v4
