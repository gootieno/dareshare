const express = require("express");
const router = express.Router();

const gamesRouter = require("./games");
const sessionRouter = require("./session");

router.use("/games", gamesRouter);
router.use("/sessions", sessionRouter);

module.exports = router;
