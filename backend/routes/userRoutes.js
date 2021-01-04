const router = require("express").Router();
const { authUser, getUserProfile } = require("../controllers/userControllers");
const protect = require("../middleware/authMiddleware");

router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

module.exports = router;
