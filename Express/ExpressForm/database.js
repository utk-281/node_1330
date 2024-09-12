const mongodb = require("mongodb").MongoClient;

//! defining mongoDB connection
let connectDB = async () => {
  let client = await mongodb.connect("mongodb://127.0.0.1:27017");
  let database = client.db("usersDB");
  let collection = await database.createCollection("usersInfo");
  return collection;
};
