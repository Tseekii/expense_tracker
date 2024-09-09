const { Router } = require("express");
const {
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
  getCurrentUser,
} = require("../controllers/user-controller");
const { auth } = require("../middlewares/auth");
const router = Router();
// zam, method, user get, user uusgedeg
router.route("/profile").get(auth, getCurrentUser);
router.route("/").get(auth, getAllUser).post(createUser);
router.route("/:id").put(updateUser).delete(auth, deleteUser);

module.exports = router;
