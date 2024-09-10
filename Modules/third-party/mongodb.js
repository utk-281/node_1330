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
  let database = client.db("emp");

  // now create collection using createCollection()
  let collection = await database.createCollection("emp");

  console.log("collection created");

  //! CRUD operations==============

  //? 1 ) create/insert ==> insertOne() / insertMany()
  // collection.insertOne({ name: "abc" });
  // collection.insertMany([{ name: "xyz" }, { name: "pqr" }]);
  // console.log("data added");

  //? 2) read/fetch ==> findOne({filter}) / find({filter})
  // let data = await collection.findOne(); // it will fetch the first document present in the collection
  // let data = await collection.findOne({ salary: 1100 });
  // console.log(data);

  // let data = await collection.find().toArray(); // whenever using find() display the data in array format.
  // let data = await collection.findOne({ sal: 2500 });
  // console.log(data);

  //? 3) update data ==> updateOne({filter}, {updated value}) / updateMany({filter}, {updated value})
  // let updatedData = await collection.updateOne(
  //   { name: "xyz" },
  //   { $set: { name: "new name", age: 23, city: "mumbai" } }
  // );

  // let data = await collection.updateMany({ sal: 2500 }, { $set: { havingInsurance: false } });

  // updating all documents present in the collection
  // let data = await collection.updateMany({}, { $set: { comm: 1200 } });

  // console.log("data updated" + data);

  //? 4) delete data ==> deleteOne({filter}) / deleteMany({filter})
  // let deletedData = await collection.deleteOne({}); // this will delete the first document present in the collection

  // let deletedData1 = await collection.deleteOne({ field: "value" }); // this will delete the first document present in the collection

  // let deleteMany = await collection.deleteMany({}); // it will delete all the documents

  // let deleteMany1 = await collection.deleteMany({ field: value }); // it will delete all the documents present in the collection
};

connectDB();
