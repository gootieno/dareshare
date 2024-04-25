const express = require("express");
const router = express.Router();
const { db } = require("../db");

// Get all categories for a specific game
router.get("/games/:gameId/categories", async (req, res) => {
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

module.exports = router;
