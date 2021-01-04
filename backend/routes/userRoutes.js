const router = require("express").Router();
const { authUser } = require("../controllers/userControllers");

router.post("/login", authUser);

module.exports = router;
