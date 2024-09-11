let express = require("express");

let app = express();

app.use((req, res, next) => {
  console.log(req);
  console.log("hiii");
  req.userName = "abc";
  next();
});

app.use((req, res, next) => {
  console.log("this is second middleware");
  next();
});

app.get("/about", (req, res) => {
  console.log(req.userName);
  res.send("about page");
});

app.listen(9000);

//! middlewares ==> middlewares are functions in express which have access to req and response object and a next() to continue the flow of execution or call next middleware.

//? with the help of middlewares we can include multiple functionalities like user authentication, password hashing, etc..

//? we can reduce the load on the server by blocking the redundant requests.

//? types of middlewares ==>
// 1) built-in middlewares
// 2) error handling middlewares
// 3) third party middlewares
// 4) user defined middlewares
// 5) application level middlewares
