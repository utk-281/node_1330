let express = require("express");
let fs = require("fs");

//? importing router.js file
let usersRoute = require("./router");
// let connectDB = async () => {
//   let client = await mongodb.connect("mongodb://127.0.0.1:27017");
//   let database = client.db("usersDB");
//   let collection = await database.createCollection("usersInfo");
//   return collection;
// };

let app = express();

//!======== middlewares ===========
app.use(express.urlencoded({ extended: true })); // html forms
// use the variable in the middleware
app.use("/api", usersRoute);

//? handling post method
app.post("/user", async (req, res) => {
  //   console.log(req);
  let myCollection = await connectDB();
  //   myCollection.insertOne(req.body);
  let { userName, userPassword } = req.body;
  console.log(req.body);
  console.log(userName, userPassword);
  myCollection.insertOne({ userName, userPassword });
  res.end("data submitted"); // end the current cycle
});

app.listen(9000, (err) => {
  if (err) throw err;
  console.log("Server running.....");
});

//! open power shell as administrator and type command "Set-ExecutionPolicy Unrestricted" to run nodemon command in terminal
