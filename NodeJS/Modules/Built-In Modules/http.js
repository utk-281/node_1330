//! http ==> it is protocol which defines a set of rules and regulation to communicate between client and server.

//! most used http methods are get, post, put, patch, delete.

//! get() ==> it fetches resource from the server. no user data is sent inside get method.

//! post() ==> it sends the user data to the server

//! put()/patch() ==> it is used to update the resource

//! delete() ==> it is used to delete an existing resource

//! http is an in built-module in nodeJS, using which we can create a server.

// let http = require("node:http"); --> here "node:" represents it is an inbuilt module, it is not mandatory

//! steps ==>
// 1) import the http module
// 2) use createServer() present inside http module
// 3) createServer() will accept a callback function with two parameters namely req and response
// 4) assign a port number to our server using listen()
// 5) to access the server, we have to use http://localhost:port_number

// let http = require("http");
// console.log(http);

// let server = http.createServer((req, res) => {
// res.write("this is passed from write()");
// res.end();

// res.end("hi from server");

// console.log(req);
// console.log(res);

// res.writeHead(200, "ok", { "Content-Type": "text/plain" });
// res.write("hello world");

// res.writeHead(200, "ok", { "Content-Type": "text/plain" });
// res.write(`<h1> hello world </h1>`);
//? output will be normal string message

// res.writeHead(200, "ok", { "Content-Type": "text/html" });
// res.write(`<h1> hello world </h1>`);

// res.end();
// });

// server.listen(9000, (err) => {
//   if (err) console.log(err);
//   console.log("server running at http://localhost:9000");
// });

//! res.end() is used to display the contents on the UI and also terminate the current request-response cycle.

//! write() is only used to display the contents on the UI.

//! writeHead(statusCode, statusMessage, {Content-Type} ) is used to set the headers.
// statusCode ==> there are total 5 series of status codes
// =========== 1) 100 ==> Informational      102 ==> processing
// =========== 2) 200 ==> Successful         200 ==> ok, 201 ==> ok and created, 202 ==> accepted
// =========== 3) 300 ==> Redirection        301 ==> permanently moved, 302 ==> found
// =========== 4) 400 ==> Client Side Error  400 ==> bad request, 401 ==> unauthorized, 403 ==> forbidden, 404 ==> not  found
// =========== 5) 500 ==> Server Side Error  500 ==> internal server error

// { "Content-Type": "text/plain" }       ==> for string contents
// { "Content-Type": "text/html" }        ==> for html response
// { "Content-Type": "text/css" }         ==> for css response
// { "Content-Type": "application/json" } ==> for json response

const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  //! === ===================sending html file======================== ===
  let data = fs.readFileSync("./index.html", "utf-8");
  res.writeHead(200, "ok", { "Content-Type": "text/html" });
  res.end(data);
});

server.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at http://localhost:9000");
});
