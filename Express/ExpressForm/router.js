/*
 ! step 1) ==> create a router.js file
 ! step 2) ==> destructure Router from express module
 ! step 3) ==> call/invoke the Router()
 ! step 4) ==> export the router variable


 !======================
 ! in the main file 
 ! import the router.js file and use it in middleware with an static path
 */

const { Router } = require("express");
const { function1, function2 } = require("./controller");

const userRoute = Router();

//? home page
userRoute.get("/about", function1);

//? form page
userRoute.get("/login", function2);

module.exports = userRoute;
