const express = require("express");

const app = express();

//! middleware
app.use((req, res, next) => {
  req.myField = "abc";
  console.log("inside middleware1");
  next();
});
app.use((req, res, next) => {
  console.log(req.myField);
  console.log("inside middleware2");
  next();
});

app.get("/home", (req, res) => {
  console.log(req.myField);
  res.send("this is home page");
});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running........");
});

/*
    ! middlewares ==> it is a function which has access to req and response object and a next() to call next middleware present or to continue the normal flow of execution 

    ! it is used with use()

    ! there are 5 types of middlewares
    --> application level middleware
    --> built-in level middleware: example express.urlencoded({ extended: true })
    --> router level middleware
    --> custom/user level middleware
    --> error level middleware
 */
