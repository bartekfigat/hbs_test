const express = require("express");
router = express.Router();

const { newUser, newUserPost } = require("./home");
const { newMSG } = require("./admin");
const { userMsg, showAll } = require("./show");

router.get("/", newUser);

router.get("/new_user", newMSG);

router.post("/new_user", newUserPost);

router.get("/messages", userMsg);

router.post("/messages", showAll);

module.exports = router;
