const { Router } = require("express");
const {
  addUser,
  fetchAllUsers,
  fetchOneUser,
  deleteUser,
  updateUser,
} = require("../controllers/users.controller");

const router = Router();

router.post("/register", addUser);

router.get("/users", fetchAllUsers);

router.get("/user/:id", fetchOneUser); // ":id" --> params (parameter)

router.delete("/user/:id", deleteUser);

// ! for updating we have 2 methods --> put and patch
router.patch("/user/:id", updateUser); // --> used for partial updation
// router.put("/user/:id", updateUser);

module.exports = router;

// /users/v1 --> static path / api versioning
