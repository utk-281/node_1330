// ! fs ==> it stands for file system

//to interact with os and perform CRUD on files

//! import fs module first
// syntax : let/const variableName = require("node:module-name");
let fs = require("fs");
// console.log(fs);

//! synchronous way or blocking way
//!1) =========================read file sync=================
// method name == readFileSync()
// syntax == fs.readFileSync("path", "encoding" )
// console.log("hello");
// console.log("middle");
// let data = fs.readFileSync("./data.txt");
// console.log(data.toString());
// console.log("end");

// let data = fs.readFileSync("./data.txt", "utf-8");
// console.log(data);

//! 2) =========================write file ========================
// method name ==> writeFileSync()
// syntax ==> fs.writeFileSync("path/filename", "data")
/*
console.log("start");
console.log("middle");
fs.writeFileSync("./index.txt", "this is a txt file and data is inserted through fs module");
console.log("end");
*/

// fs.writeFileSync("../app.js", "let a = 10");

// console.log("start");
// fs.writeFileSync("./index.txt", "this is another statement");
// console.log("end");

//? if we pass a file name which is not present then it will create a new file with the provided data
//? if we pass a file name which is already present, then it will over write the existing data with the new one.

// ! 3) =================update/append file=========================
// method name ==> appendFileSync()
// syntax ==> fs.appendFileSync("filename/path", "data")

// console.log("start");
// console.log("middle");
// fs.appendFileSync("./data.txt", " this is updated statement");
// console.log("end");

// console.log("start");
// console.log("middle");
// fs.appendFileSync("./index.html", " this is updated statement");
// console.log("end");

//? if we pass the path of existing file then it will update/append the data otherwise it will create a new file with the provided data.

//! 4) ===============================delete file =================
// method name ==> unlinkSync()
// syntax ==> fs.unlinkSync("path")

// console.log("start");
// console.log("middle");
// fs.unlinkSync("./index.html");
// console.log("file deleted");
// console.log("end");

// copy the contents of "fs.js" to a new file "home.js"

console.log("start");
let readFile = fs.readFileSync("./fs.js", "utf-8");
console.log(readFile);
console.log("middle");
fs.writeFileSync("./home.js", readFile);
console.log("file created");
console.log("end");
