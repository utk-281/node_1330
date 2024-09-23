const { Router } = require("express");
const { registerUser } = require("../controllers/users.controller");
const router = Router();

router.post("/register", registerUser);

module.exports = router;
