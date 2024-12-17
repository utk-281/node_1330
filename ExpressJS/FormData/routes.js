const { Router } = require("express");
const {
  displayHomePage,
  displayFormPage,
  handleFormSubmit,
  fetchAllData,
} = require("./controller");

const router = Router();

//! home page
router.get("/", displayHomePage);
//! form page
router.get("/register", displayFormPage);
//! handle submit
router.post("/abc", handleFormSubmit);
//! display all data
router.get("/data", fetchAllData);

module.exports = router;

/* 
    ! destructure Router component from express
    ! invoke the Router component
    ! export it
*/

// http://localhost:9000//v1/
