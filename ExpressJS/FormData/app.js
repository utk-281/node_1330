//! main file names can be app.js, index.js, server.js

/*
! --> import route.js file manually
! --> use it in middleware 
 */

const express = require("express");
const { MongoClient } = require("mongodb");
const abc = require("./routes");

//! connectDB function

const connectDB = async () => {
  let client = await MongoClient.connect("mongodb://localhost:27017");

  let database = client.db("expressDB");

  let collection = await database.createCollection("users");

  return collection;
};

const app = express();

//! ==> middleware --> it is a function
app.use(express.urlencoded({ extended: true }));
// use()
app.use("/api/v1", abc);

//! form page
app.get("/register", (req, res) => {
  createReadStream("./pages/form.html", "utf-8").pipe(res);
});

//! json data
app.get("/json-data", (req, res) => {
  createReadStream("./pages/data.json", "utf-8").pipe(res);
});

//! css data
app.get("/styles", (req, res) => {
  createReadStream("./pages/style.css", "utf-8").pipe(res);
});

app.post("/abc", async (req, res) => {
  //   console.log(req);
  //   console.log(req.method);
  //   console.log(req.host);
  //   console.log(req.body);
  //! copy paste the endpoint in the form action --> /abc
  //! set form method to post
  //! use "name" attribute

  let { username, userEmail, userPassword } = req.body;
  console.log(username, userEmail, userPassword);

  let collection = await connectDB();
  collection.insertOne({ userEmail, userPassword, username });

  res.send(`${username} is registered with ${userEmail} email successfully!!!!`);
});

//! fetch all users
app.get("/users", async (req, res) => {
  let collection = await connectDB();

  let users = await collection.find().toArray();

  res.send(users);
});

//! page not found
app.get("*", (req, res) => {
  res.send(`<h1> page not found </h1>`);
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log(`server running at http://localhost:9000`);
});

//! if you want to use react import/export format ==> ES6 format
//--> go to json file, add "type":"module"
// import variableName from ""

//! commonJS format ==> let variableName = require("")
