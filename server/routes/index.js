const express = require("express");
const router = express.Router();

const categoriesRouter = require("./categories");
const gamesRouter = require("./games");
const questionsRouter = require("./questions");
const sessionRouter = require("./session");

router.use("/categories", categoriesRouter);
router.use("/games", gamesRouter);
router.use("/questions", questionsRouter);
router.use("/sessions", sessionRouter);

module.exports = router;
