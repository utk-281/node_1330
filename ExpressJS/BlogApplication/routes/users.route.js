const { Router } = require("express");
const { registerUser, fetchAllUser, fetchOneUser } = require("../controllers/users.controller");

const router = Router();

router.post("/register", registerUser);
router.get("/users", fetchAllUser);
router.get("/user/:id", fetchOneUser);

module.exports = router;
