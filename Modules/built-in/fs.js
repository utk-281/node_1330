// ! fs ==> it stands for file system

//to interact with os and perform CRUD on files

//! import fs module first
// syntax : let/const variableName = require("node:module-name");
let fs = require("fs");
// console.log(fs);

//! synchronous way or blocking way
//!1) =========================read file sync==========
// method name == readFileSync()
// syntax == fs.readFileSync("path", "encoding" )
// console.log("hello");
// console.log("middle");
// let data = fs.readFileSync("./data.txt");
// console.log(data.toString());
// console.log("end");

let data = fs.readFileSync("./data.txt", "utf-8");
console.log(data);
