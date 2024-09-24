const { Router } = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/users.controller");
const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logoutUser);

module.exports = router;
