const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all questions for a specific game
router.get("/games/:gameId/questions", async (req, res) => {
  try {
    const { gameId } = req.params;
    const questionsSnapshot = await db
      .collection("Games")
      .doc(gameId)
      .collection("Questions")
      .get();
    const questions = questionsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
