const { MongoClient } = require("mongodb");

exports.connectDB = async () => {
  let client = await MongoClient.connect("mongodb://localhost:27017/");

  let database = client.db("usersDB");

  let collection = await database.createCollection("myUSers");

  return collection;
};
