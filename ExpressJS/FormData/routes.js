const { Router } = require("express");
const { displayHomePage } = require("./controller");

const router = Router();

//! home page
router.get("/", displayHomePage);

module.exports = router;

/* 
    ! destructure Router component from express
    ! invoke the Router component
    ! export it
*/

// http://localhost:9000//v1/
api;
