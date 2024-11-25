// let variableName = require("module-name")
let fs = require("fs");
// console.log(fs);

// fs ==> file system, using this module, we can perform CRUD operations on files.

//! =============== synchronous way =======================

//! 1) creating a file synchronously
// method name ==> writeFileSync()
// syntax ==> fs.writeFileSync("path/filename", "data to added")
// create a file with any extension.

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

// console.log("start");

// let data = fs.readFileSync("./fs.js", "utf-8");
// console.log(data.toString()); // it is returning a buffer value. it is an array which stores the content of the file in binary format and displaying in hexadecimal format.

// console.log("middle");
// console.log("end");

//! 3) updating a file synchronously
// method name ==> appendFileSync()
// syntax ==> fs.appendFileSync("path", "new data")

// console.log("start");

// fs.appendFileSync("./index.txt", " added new data");
// console.log("file appended/added");

// console.log("middle");
// console.log("end");

// fs.appendFileSync("./demo.py", " new data");

/*  
1) if the file is already present then it will append/update the data

2) if the file is not preset, then it will create a file with the provided data
*/

//! 4) deleting a file synchronously
// method name ==> unlinkSync()
// syntax ==> fs.unlinkSync("path")

// console.log("start ");

// fs.unlinkSync("./index.html");
// console.log("file deleted");

// console.log("middle ");
// console.log("end ");

//! ================= CRUD on folders ========================
//! 1) creating a folder/directory synchronously
// method name ==> mkdirSync()
// syntax ==> fs.mkdirSync("path/filename")

// console.log("Start");

// fs.mkdirSync("../Node");

// console.log("middle");
// console.log("end");

//! 2) deleting a folder/directory synchronously
// method name ==> rmdirSync()
// syntax ==> fs.rmdirSync("path")

// console.log("start");
// console.log("middle");

// fs.rmdirSync("../Node");
// console.log("folder deleted");

// console.log("end");

//! 3) renaming a folder/file synchronously
// method name ==> renameSync()
// syntax ==> fs.renameSync("oldFileName/ oldFolderName", "newFileName/newFolderName")

// console.log("start");

// fs.renameSync("demo.py", "demo1.java"); // renaming a file(extension can also be changed)
// fs.renameSync("routers", "controllers"); // renaming a folder

// console.log("end");

//! 1) create file "demo.js" and copy the contents of "fs.js" in the new file
// read fs.js file
// let data = fs.readFileSync("./fs.js", "utf-8");
// // write/ create demo.js and pass the data
// fs.writeFileSync("./demo.js", data);
// console.log("file copied");

//! 2) create this folder structure
//  Backend/Node/src/routers/userRouter.js

// fs.mkdirSync("./Backend");
// console.log("backend folder created");
// fs.mkdirSync("./Backend/Node");
// console.log("node folder created");
// fs.mkdirSync("./Backend/Node/src");
// console.log("src folder created");
// fs.mkdirSync("./Backend/Node/src/routers");
// console.log("routers folder created");
// fs.writeFileSync("./Backend/Node/src/routers/routers.js", "let a = 10");
// console.log("file created");

// fs.mkdirSync("./java/root/demo");

//! 3) delete this folder structure (hint ==> start from inside)
// fs.rmdirSync("./Backend", { recursive: true });

// fs.unlinkSync("./Backend/Node/src/routers/routers.js")

//! ===========          asynchronous execution        ==================
//! 1) using callbacks
//! 2) using then/catch
//! 3) using async and await

//! ===========using callbacks (asynchronous execution)==================

//! 1) writing/creating a file asynchronously
// method name ==> writeFile()
// syntax ==> fs.writeFile("path/filename", "data", callback fn)

// console.log("start");
// fs.writeFile("./data.txt", "this is some data", (err) => {
//   if (err) console.log(err);
//   console.log("file created");
// });
// /* (....,(err) => {
//   if (err) console.log(err);
//   console.log("file created");
// });
//   !  ===this is called as callback first error===
//   ? passing a err parameter first inside a callback is known as error first callback
// */
// console.log("middle");
// console.log("end");

//! 2) reading a file asynchronously
// method name ==> readFile()
// syntax ==> fs.readFile("path", "encoding", cb)

// console.log("start");

// fs.readFile("./data.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   console.log("file read");
// });

// console.log("middle");
// console.log("end");

//! 3) updating/appending a file asynchronously
// method name ==> appendFile()
// syntax ==> fs.appendFile("path", "data to be added", cb)

// console.log("Start");

// fs.appendFile("./data.txt", " this is added data", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   console.log("file updated");
// });

// console.log("middle");
// console.log("end");

//! 4) deleting a file async
// method name ==> unlink()
// syntax ==> fs.unlink("path", cb)

// console.log("Start");

// fs.unlink("./data.txt", (err) => {
//   if (err) console.log(err);
//   console.log("file deleted");
// });

// console.log("middle");
// console.log("end");

//! ===========using promises (asynchronous execution) then/catch ==================
// let fs = require("fs/promises");
// let fs = require("fs").promises;
// if we perform any operations using any of the import statements, then output will be a promise object

//! 1)  creating a file
// method name ==> writeFile()
// syntax ==> fs.writeFile("path/filename", "data").then().catch()

// let write = fs.writeFile("./demo.py", "a = 10");
// // console.log(write);
// write
//   .then(() => {
//     console.log("file created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! 2)  reading a file
// let read = fs.readFile("./demo.py", "utf-8");
// // console.log(read); // promise --> pending
// read
//   .then((data) => {
//     console.log(data);
//     console.log("file read")
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! 3) updating a file
// method name ==> appendFile()
// syntax ==> fs.appendFile().then().catch()

// fs.appendFile("./index.txt", "data to be added")
//   .then(() => {
//     console.log("file appended");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! 4) DELETING A file
// method name ==> unlink()
// syntax ==> fs.unlink().then().catch()

// fs.unlink("./index.txt")
//   .then(() => {
//     console.log("file deleted");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! creating a folder
// method name ==> mkdir()
// syntax ==> fs.mkdir().then().catch()

// fs.mkdir("./node_modules")
//   .then(() => {
//     console.log("folder created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
