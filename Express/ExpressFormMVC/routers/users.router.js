const { Router } = require("express");
const {
  addUser,
  fetchAllUsers,
  fetchOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");
const router = Router();

router.post("/add", addUser);

router.get("/all", fetchAllUsers);

router.get("/one/:id", fetchOneUser);

router.put("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

module.exports = router;
