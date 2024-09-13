const { Router } = require("express");
const { addUser } = require("../controllers/user.controller");

const router = Router();

router.post("/add", addUser);

module.exports = router;
