const express = require("express");
const router = express.Router();
const { db } = require("../db");

// Get all games
app.get("/games", async (req, res) => {
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

module.exports = router;
