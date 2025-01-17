const { Router } = require("express");
const {
  registerUser,
  fetchAllUser,
  fetchOneUser,
  updateUserDetails,
  updateUserPassword,
  deleteUser,
  loginInUser,
  logout,
} = require("../controllers/users.controller");

const router = Router();

router.post("/register", registerUser);
router.get("/users", fetchAllUser);
router.get("/user/:id", fetchOneUser);
router.patch("/user/:id", updateUserDetails);
router.patch("/update-password/:id", updateUserPassword);
router.delete("/delete/:id", deleteUser);

router.post("/login", loginInUser);
router.get("/logout", logout);

module.exports = router;
