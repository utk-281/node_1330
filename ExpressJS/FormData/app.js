//! main file names can be app.js, index.js, server.js

/*
! --> import route.js file manually
! --> use it in middleware 
 */

const express = require("express");
const abc = require("./routes");

const app = express();

//! ==> middleware --> it is a function
app.use(express.urlencoded({ extended: true }));
// use()
app.use("/api/v1", abc);

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log(`server running at http://localhost:9000`);
});

//! if you want to use react import/export format ==> ES6 format
//--> go to json file, add "type":"module"
// import variableName from ""

//! commonJS format ==> let variableName = require("")
