//! npm ==> node package manager. it is a software which manages different packages and through which developers can install, manage, develop new packages and delete packages.

//!1) before installing any third party module, root folder must have a "package.json" file.
//? this .json file cannot be created manually.
// ==>  to create a json file type "npm init -y"

//? package.json file contains meta data(details of the project) of the project like name, author, description, version, "dependencies", etc....

//! 2) now install the required third party module/packages using command "npm i module-name" or "npm install module-name"

// example ==> npm install mongodb
// example ==> npm i express

//! 3) now import the module

let mongodb = require("mongodb").MongoClient; // this will act as an interface between node and mongoDB

// console.log(mongodb);

// let url = "mongodb://localhost:27017";

let connectDB = async () => {
  // this will create a connection
  let client = await mongodb.connect("mongodb://localhost:27017");

  // now create a database using db()
  let database = client.db("myDB");

  // now create collection using createCollection()
  let collection = await database.createCollection("myCollection");

  console.log("collection created");
};

connectDB();
