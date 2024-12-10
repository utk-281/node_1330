// third party modules ==> it is downloaded from any third source
// (npm) ==>  node package manager
//  npm stands for node package manager which is used to download, maintain, delete and create different modules/packages

//!=== by default the package manager for node is npm ===

//! to use any third party module, first we have to download it form npm,
//! before downloading any third party module/package we must have a "package.json" file in our root folder.

//!=== steps to install third party modules ===

//! 1) to create a package.json file type command
// ==> "npm init -y" in the terminal
// this file contain the details of project like name, author, version, keywords, scripts, etc..., along with dependencies.

//! 2) now that we have package.json file in our root folder, now install the required third party modules, to install modules type
// npm install module-name
// npm i module-name
//! to install multiple modules at the same time
// npm i/install module-name1 module-name2 .........

//! 3) import the modules.

// const mongodb = require("mongodb").MongoClient
const { MongoClient } = require("mongodb");
// console.log(mongodb);
//! MongoClient ==> it is used to create a connection between node and mongodb

const connectDB = async () => {
  //! initiate the connection with mongodb with the help of connect()
  let client = await MongoClient.connect("mongodb://localhost:27017");
  //   console.log(client);
  console.log("connection created.....");

  //! after establishing a connection, create a database with the help of db("database-name")
  let database = client.db("NodeDB");
  console.log("database created...");

  //! after creating a database, create a collection with the help of createCollection("c-name")
  let collection = await database.createCollection("myUsers");
  console.log("collection created....");

  //   collection.insertOne({ name: "abc", phoneNo: 1234567890 });
  //   console.log("data saved");
};

connectDB();
