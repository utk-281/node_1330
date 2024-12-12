//! === every root folder must contain only one "package.json" file

//! 1) to create a package.json
//! before installing any third-party module, we must have a "package.json" file
// command to create a package.json file
//? ==> npm init -y : it generates a package.json file with default values
//? ==> npm init : it generates a package.json file with user defined values

//! package.json file => it contains the details of project like name, author, version, description, etc.. along with dependencies(installed third party modules)

//! 2) install required third party modules/packages
//? ==> npm i/install module-name
//? ==> npm i/install module-name1 module-name2 .......

//! 3) use the modules by importing them.

//! a) import express modules
const express = require("express");
// console.log(express);

//! b) call/invoke top level function
let app = express();

//! d) handle routing
// home page
app.get("/", (req, res) => {
  res.write("this is home page");
  res.end();
});

//download
app.get("/download", (req, res) => {
  res.send("this is download");
});

// contact page
app.get("/contact", (req, res) => {
  res.send("this is contact ");
});

// about-us page page
app.get("/about-us", (req, res) => {
  res.send("this is about-us page");
});

// page not found => defined at last after all the endpoints
app.get("*", (req, res) => {
  res.send("page not found");
});

//! c) assign a port
app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running.............");
});

//! in built feature of nodeJS to restart every-time once a file is saved ==> node --watch filename

//! by using third party module ==> nodemon
// nodemon filename

//! npm i nodemon -g

// open shell as admin and type
// Set-ExecutionPolicy Unrestricted
// then agree for --> yes to all
