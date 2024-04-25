const express = require("express");
const router = express.Router();
const { db } = require("../db");

// Get a specific game session
app.get("/game-sessions/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const sessionDoc = await db.collection("GameSessions").doc(sessionId).get();
    if (!sessionDoc.exists) {
      return res.status(404).send("Game session not found");
    }
    res.status(200).json({ id: sessionDoc.id, ...sessionDoc.data() });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
