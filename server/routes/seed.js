const isDeveloper = require("../middleware/authMiddleware");
const neverHaveIeverSeeds = require("../db/nhie");

app.post("/seed-database/nhie", isDeveloper, async (req, res) => {
  try {
    await neverHaveIeverSeeds(); // Call your seeding function
    res.send("Database seeded successfully");
  } catch (error) {
    console.error("Seeding error:", error);
    res.status(500).send("Error seeding database");
  }
});
