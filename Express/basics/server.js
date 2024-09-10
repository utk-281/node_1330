//! 1) import the express module
const express = require("express");
// console.log(express);

//! 2) invoking/call the top level function
const app = express();

//! 4) create different routes

//? home page
app.get("/", (req, res) => {
  res.send("this is home page");
});

//? download page
app.get("/download", (req, res) => {
  res.send("this is download page");
});

//? contact page
app.get("/contact", (req, res) => {
  res.send("this is contact page");
});

//? else part
app.get("*", (req, res) => {
  res.send(`<h1> page not found </h1>`);
});

//! 3) assigning a port
app.listen(9000, (err) => {
  if (err) throw err;
  console.log("server running.....");
});

//! to install nodemon type command ==> "npm i nodemon -g"
// -g will save the package globally in the system and we can use it anywhere in the system
// to start the server type command ==> "nodemon filename"
