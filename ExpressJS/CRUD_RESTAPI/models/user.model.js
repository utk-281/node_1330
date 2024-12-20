//! we have to create a schema/structure using mongoose module

const mongoose = require("mongoose");

//! we area defining a structure by creating an object of Schema class.
// const userSchema = new mongoose.Schema({input fields}, {options});
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      // required: true, // this field in mandatory
    },
    password: {
      type: String,
    },
    phoneNo: {
      type: Number,
    },
    isHavingInsurance: {
      type: Boolean,
    },
  },
  {
    timestamps: true, //todo --> after adding on doc
  }
);

module.exports = mongoose.model("User", userSchema);
// users --> lowercase and plural
//! model() => we are passing the schema in model() and it will create a collection/model in mongodb according to that schema

// Schema is class
// new Error()

//! 1) import mongoose module ==> Schema class, model method
//! 2) using Schema class define the structure of the entity
//! 3) using model() create a collection inside mongodb passing the schema you just created
