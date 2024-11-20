// let variableName = require("module-name")
let fs = require("fs");
// console.log(fs);

// fs ==> file system, using this module, we can perform CRUD operations on files.

//! =============== synchronous way =======================

//! 1) creating a file synchronously
// method name ==> writeFileSync()
// syntax ==> fs.writeFileSync("path/filename", "data to added")

// console.log("start");
// console.log("middle");

// fs.writeFileSync("./index.js", "second line");
// console.log("file created");

// console.log("end");

/*  
1) if the file is already present then it will simply over-write the existing data with the new data 

2) if the file is not preset, then it will create a file with the provided data
*/

//! 2) reading file synchronously
// method name ==> readFileSync()
// syntax ==> fs.readFileSync("path/filename", "encoding")

console.log("start");

let data = fs.readFileSync("./fs.js", "utf-8");
console.log(data.toString()); // it is returning a buffer value. it is an array which stores the content of the file in binary format and displaying in hexadecimal format.

console.log("middle");
console.log("end");
