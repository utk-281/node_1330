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

let http = require("http");
// console.log(http);

let server = http.createServer((req, res) => {
  //   res.end("hi from server");
});

server.listen(9000);
