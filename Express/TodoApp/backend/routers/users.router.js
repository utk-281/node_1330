const { Router } = require("express");

const {
  registerUser,
  loginUser,
  logoutUser,
  updateUserProfile,
  updateUserPassword,
  fetchAllUsers,
  fetchSingleUser,
  deleteUser,
  updateUserRole,
} = require("../controllers/users.controller");
const { authenticate, authorize } = require("../middlewares/auth.middleware");
const { upload } = require("../middlewares/multer.middleware");

const router = Router();

router.post("/register", upload.single("profilePicture"), registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

router.patch("/update", authenticate, updateUserProfile);
router.patch("/update-password", authenticate, updateUserPassword);

//! admin router
router.get("/all", authenticate, authorize, fetchAllUsers);
router.get("/:id", authenticate, authorize, fetchSingleUser);
router.delete("/:id", authenticate, authorize, deleteUser);
router.patch("/:id", authenticate, authorize, updateUserRole);

module.exports = router;
