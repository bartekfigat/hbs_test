const express = require("express");
router = express.Router();

const home = require("./home");
const admin = require("./admin");
const show = require("./show");

router.get("/", home.newUser);

router.get("/new_user", admin.newMSG);

router.post("/new_user", home.newUserPost);

router.get("/messages", show.userMsg);

router.post("/messages", show.showAll);

module.exports = router;
