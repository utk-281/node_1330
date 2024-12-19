const { Router } = require("express");
const { addUser } = require("../controllers/users.controller");

const router = Router();

router.post("/register", addUser);

module.exports = router;
