const { Router } = require("express"); // commonJS format

const {
  addUser,
  fetchAllUsers,
  fetchOneUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/users.controller");

const router = Router();

router.post("/register", addUser);

router.post("/login", loginUser);

router.get("/all", fetchAllUsers);

router.get("/one/:id", fetchOneUser);

router.put("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

module.exports = router;
