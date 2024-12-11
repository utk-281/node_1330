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
const { MongoClient, ObjectId } = require("mongodb");
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

  //! 1) create/ write data ==> insertOne({})/ insertMany([{},...])
  // ==> insertOne({})
  // let data = await collection.insertOne({ name: "varun", gender: "m" });
  // console.log(data);
  // ==> insertMany([{},{},...])
  // let multipleData = await collection.insertMany([
  //   { name: "ishika" },
  //   { name: "sirisha" },
  //   { name: "ashwin" },
  // ]);
  // console.log(multipleData);
  // console.log("data added to database");

  //! 2) fetch/ read data ==> findOne({})/ find({})
  //! without filter condition
  // let data = await collection.findOne(); // fetches the top most document
  // console.log(data)

  //! with filter condition
  // let data = await collection.findOne({ name: "ishika" }); // it return an object
  // console.log(data);

  //67594caaf9286bbdd6064c99 ==> fetch the document which has this id
  // let data = await collection.findOne({ _id: new ObjectId("67594caaf9286bbdd6064c99") }); //string
  // console.log(data);

  //!  without filter condition
  // let data = await collection.find({}).toArray(); // it returns array of objects
  // console.log(data);
  //! whenever we use find() make sure to use toArray() to convert it into array of objects

  //! with filter condition
  // fetch all the details of users whose name is "ashwin"
  // let data = await collection.find({ name: "ashwin" }).toArray(); // both values and keys are case sensitive
  // console.log(data);

  //! 3) delete data ==> deleteOne({})/ deleteMany({})

  // let data = await collection.deleteOne({}); // deletes the top most document

  // let data = await collection.deleteOne({ name: "varun" }); // deletes the first document which fulfills the condition

  // let data = await collection.deleteMany({}); // deletes all the documents present inside the collection

  // let data = collection.deleteMany({ name: "sirisha" }); // delete all the documents which fulfills the condition

  //! 3) update data ==> updateOne({}, {}, {})/ updateMany({}, {}, {})

  // collection.updateOne({ name: "ishika" }, { $set: { name: "ishi", city: "banglore" } });
  // console.log("document updated");

  // let data = await collection.updateOne(
  //   { _id: new ObjectId("675955e340d5c05f936f1a68") }, // filter part
  //   { $set: { city: "pune", email: "siri@gmail.com" } },
  //   { upsert: true } //updation part
  // );
  // console.log(data);
};

connectDB();
