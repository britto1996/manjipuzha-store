const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require("../controllers/user");

router.post("/", registerUser);
router.get("/", getUsers);
router.post("/login", authUser);
router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);
router.delete("/:id", deleteUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);

module.exports = router;
