const express = require("express");
const { registerUser } = require("../controllers/userController");
const { authUser } = require("../controllers/userController");
const router = express.Router()

router.route("/").post(registerUser)
router.post("/login",authUser)


module.exports = router;