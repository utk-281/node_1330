// ! fs ==> it stands for file system

//to interact with os and perform CRUD on files and folders/directory

//! import fs module first
// syntax : let/const variableName = require("node:module-name");
// let fs = require("fs");
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
/*
console.log("start");
let readFile = fs.readFileSync("./fs.js", "utf-8");
console.log("middle");
fs.writeFileSync("./home.js", readFile);
console.log("file created");
console.log("end");
*/

//! CRUD of folders ==========================

//! 1) creating a folder
// method name ==> mkdirSync()
// syntax ==> fs.mkdirSync("folder-name")

// fs.mkdirSync("express");
// console.log("folder created");

// create a folder inside local folder
// fs.mkdirSync("../local/users");
// console.log("folder created");

//! 2) =================delete a folder===================
// method name ==> rmdirSync()
// syntax ==> fs.rmdirSync("path")

// fs.rmdirSync("./express");
// console.log("folder deleted");

//! 3) =================renaming a folder/file=================
// method name ==> renameSync()
// syntax ==> fs.renameSync("old filename/ foldername", "new name")

// fs.renameSync("data.txt", "data1.txt");
// fs.renameSync("demo", "test");

//? "backend/src/controllers/user.js" ==> nested operation (creation)
// root folder ==> backend

// fs.mkdirSync("../../backend");
// console.log("backend folder created");
// fs.mkdirSync("../../backend/src");
// console.log("src created");
// fs.mkdirSync("../../backend/src/controllers");
// console.log("controller created");
// fs.writeFileSync("../../backend/src/controllers/user.js", "let user = false");
// console.log("file created");

// fs.mkdirSync("../../backend/src/controllers"); this will not work
// fs.rmdirSync("../../backend"); this will also not work as folder must be empty

//? "backend/src/controllers/user.js" ==> nested operation (deletion)
// fs.unlinkSync("../../backend/src/controllers/user.js");
// console.log("file deleted");
// fs.rmdirSync("../../backend/src/controllers");
// fs.rmdirSync("../../backend/src");
// fs.rmdirSync("../../backend");
// console.log("folder deleted");

//! =============================== async execution =====================================
// ==> using callbacks ==> using then, catch ==> using async await

//! ============async using callbacks=======================

//! 1) create a file
// method name ==> writeFile()
// syntax ==> fs.writeFile("path", "data", cb)

// console.log("start");
// console.log("middle");
// fs.writeFile("../index.txt", "this is some data", (err) => {
//   if (err) console.log(err);
//   console.log("file created");
// });
// console.log("end");

//! 2) reading a file
// method name ==> readFile()
// syntax ==> fs.readFile("path", "encoding", cb)

// console.log("start");
// console.log("middle");
// fs.readFile("./fs.js", "utf-8", (err, param2) => {
//   if (err) console.log(err);
//   console.log("file read");
//   console.log(param2);
// });
// console.log("end");

//! 3) update or append file
// method name ==> appendFile
// syntax ==> fs.appendFile("path", "data", cb)

// console.log("start");
// console.log("middle");
// fs.appendFile("./index.txt", " this is second statement", (err) => {
//   if (err) throw err;
//   console.log("file updated");
// });
// console.log("end");

//! 4) deleting a file
// method name => unlink()
// syntax ==> fs.unlink("path", cb)

// console.log("start");
// fs.unlink("./index.txt", (err) => {
//   if (err) throw err;
//   console.log("file deleted");
// });
// console.log("end");

//! 5) CREATING A FOLDER
// method name ==> mkdir()
// syntax ==> fs.mkdir("path", cb)

// fs.mkdir("../built-in1", (err) => {
//   if (err) throw err;
//   console.log("folder created");
// });
// console.log("end");

//! 6) deleting a folder

//! 7) renaming folder/file

//! =================using then/catch======================

// let fs = require("fs").promises;
// let fs = require("fs/promises");

//! 1) creating a file
// method name ==> writeFile()
// syntax ==> fs.writeFile("path", "data")
// console.log("start");
// let data = fs.writeFile("./index.js", "data to be added");
// data
//   .then(() => {
//     console.log("file created");
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

// console.log("end");

//! 2) reading a file
//method name ==> readFile()
// syntax ==> fs.readFile("path", "encoding").then().catch()

// console.log("start");
// fs.readFile("./index.js", "utf-8")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("end");

//! copy the contents of "fs.js" to new file "index.txt" using then/catch

// fs.readFile("./fs.js", "utf-8")
//   .then((result) => {
//     fs.writeFile("./index.txt", result)
//       .then(() => {
//         console.log("file copy pasted");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
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

//! deleting a folder, rename file/ folder

//"backend/src/controller/user.js" using then/catch and cb

//!=================using async await======================
//! 1)  creating a file

// console.log("start");
async function write() {
  console.log("inside async/await");
  await fs.writeFile("./index.html", "data");
  console.log("bye");
}
// console.log("end");

function hello() {
  console.log("hello");
}

// write();
// hello();

// ! 2)=================== updating a file =====================
let updateFile = async () => {
  await fs.appendFile("./index.html", "new statement");
  console.log("file updated");
};

// updateFile();

//? let fs = require("fs") ==> this will give direct output based on the operation.

//? let fs = require("fs/promises") or require("fs").promises ==> this will return a promise based on the operation.

//!======================= 3) reading a file========================
let readFile = async () => {
  let data = await fs.readFile("./index.html", "utf-8");
  console.log(data);
};
// readFile();
// fileRead();

// "backend/src/controller/userController.js" using async await

let fun = async () => {
  await fs.mkdir("./backend");
  console.log("backend created");
  await fs.mkdir("./backend/src");
  console.log("src created");
  await fs.mkdir("./backend/src/controller");
  console.log("controller created");
  await fs.writeFile("./backend/src/controller/userController.js", "data");
  console.log("file created");
};

// fun();

let deleteFile = async () => {
  await fs.rmdir("./backend", { recursive: true });
};

// deleteFile();

//! =================== buffer and streams ====================

let fs = require("fs");
// console.log(fs);

//? buffer ==>
// buffer is a fixed size array allocated outside the V8 engine
// once buffer is created it cannot be changed i.e, it is fixed in size
// it is used to store binary data
// it is used for streaming purposes.

// let read = fs.readFileSync("./index.html");
// console.log(read);

//TODO
// Buffer is a class in NodeJS.

//? streaming ==> streaming is used for transferring data from source to destination in chunks or pieces.
//? it is of 4 types ==>

//a) readableStream ==> it is used to read data from source.
//b) writeableStream ==> it is used to write the data to destination.
//c) duplexStream ==> it is used to read and write data simultaneously.
//d) transformStream ==> it is similar to duplex streams but we can modify the data.

//! readableStream
// method name ==> createReadStream()
// syntax ==> fs.createReadStream("path", "encoding")

// let payload = fs.createReadStream("./index.html", "utf-8");
// payload.on("data", (myVar) => {
//   console.log(myVar);
// });

//! writeableStream
// method name ==> createWriteStream()
// syntax ==> fs.createWriteStream("path/filename")

// let payload = fs.createWriteStream("./data.txt");

// payload.write("data to be written", () => {
//   console.log("file created");
// });

//! duplexStream
// method name ==> pipe()
// pipe() ==> pipe() is used to connect the source to destination and this method allows us to perform both read and write operations simultaneously.
// read fs.js using streams
// let readData = fs.createReadStream("./fs.js");
// let writeData = fs.createWriteStream("./app.js");
// readData.pipe(writeData);
// console.log("file created");

// how data is transferred in chunks

// ========================================== TODO
let data = fs.createReadStream("./index.html", { higherWaterMark: 100 });
data.on("data", (chunk) => {
  console.log(`${chunk.toString()} data read -------- ${chunk.length} size`);
});
