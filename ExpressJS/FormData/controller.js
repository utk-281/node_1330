const { createReadStream } = require("node:fs");
const { connectDB } = require("./database");

let displayHomePage = (req, res) => {
  createReadStream("./pages/index.html", "utf-8").pipe(res);
};

let displayFormPage = (req, res) => {
  createReadStream("./pages/form.html", "utf-8").pipe(res);
};

let handleFormSubmit = async (req, res) => {
  let { username, userEmail, userPassword } = req.body;
  let collection = await connectDB();
  collection.insertOne({ userEmail, userPassword, username });
  res.send("data saved successfully!!!!");
};

let fetchAllData = async (req, res) => {
  let collection = await connectDB();
  let data = await collection.find().toArray();
  res.send(data);
};

module.exports = {
  displayHomePage,
  displayFormPage,
  handleFormSubmit,
  fetchAllData,
};

// http://localhost:9000/api/v1/data ==> API
