const express = require("express");
const router = express.Router();
const { db } = require("../db");

// Get all games
router.get("/", async (req, res) => {
  try {
    const gamesSnapshot = await db.collection("Games").get();
    const games = gamesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(games);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get all categories for a specific game
router.get("/:gameId/categories", async (req, res) => {
  try {
    const { gameId } = req.params;
    const categoriesSnapshot = await db
      .collection("Games")
      .doc(gameId)
      .collection("Categories")
      .get();
    const categories = categoriesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get all questions for a specific game
router.get("/:gameId/questions", async (req, res) => {
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
