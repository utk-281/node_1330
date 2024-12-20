const { Router } = require("express");
const { addUser, fetchAllUsers } = require("../controllers/users.controller");

const router = Router();

router.post("/register", addUser);

router.get("/users", fetchAllUsers);

module.exports = router;
