//? http module provides some methods ==>

// 1) get() ==> it gets/fetches te resource from the server
// 2) post() ==> it sends data to the server
// 3) delete() ==> it deletes the resource
// 4) put() ==> it is used to update the resource
// 5) patch() ==> it is used to update the resource

//! 1) import http module
//! 2) with the help of createServer() we can create a server, createServer() takes a callback function with two parameters request and response.
//! to assign a port to a server we use listen()

//? if we want to display any message to the UI we use write(). example res.write("message")

//? end() ==> it is used to end the current request and response cycle

//? if any modifications/updates are done, then in order to get the updated output we need to kill (in terminal press "ctrl + c" ) the server and start the server again.
/* 
let http = require("http");
// console.log(http);

let server = http.createServer((req, res) => {
  res.writeHead(404, "not found", { "content-type": "text/plain" });
  res.write("hello from server,, with updated value");
  res.end();
});

server.listen(3000, (err) => {
  if (err) throw err;
  console.log(`server is running on port 3000`);
});
 */

//! ========================= sending html contents ==================
let http = require("node:http");
let fs = require("fs");

// let server = http.createServer((req, res) => {
//? sending html contents
/* res.wri teHead(200, "ok", { "content-type": "text/html" });
  res.write("<h1> hello world </h1>");
  res.end(); */
//? displaying the html file
//   res.writeHead(200, "ok", { "content-type": "text/html" });
//   let data = fs.readFileSync("./index.html", "utf-8");
//   res.end(data);
// sending data using streams
//   let data = fs.createReadStream("./index.html");
//   data.pipe(res);
//   fs.createReadStream("./index.html").pipe(res);

//? while using pipe method, we don't need to use end() because internally pipe() is calling end()
// });

/* server.listen(9000, (err) => {
  if (err) throw err;
  console.log("server running at port 9000");
});
 */

//! ========================= sending css contents ==================

/*let  server = http.createServer((req, res) => {
  res.writeHead(200, "ok", { "content-type": "text/css" });
  fs.createReadStream("./styles.css").pipe(res);
});

server.listen(9000, (err) => {
  if (err) throw err;
  console.log("server running......");
}); */

//! ========================== sending json data ====================
// content-type ==> application/json

//! routing ==> to handle multiple routes requested by user based on the endpoints

let server = http.createServer((req, res) => {
  console.log(req.url);
  console.log("hello");

  console.log();
  res.end();
});

server.listen(9000);
