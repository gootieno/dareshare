const { db } = require("../index");

class Game {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  async save() {
    const docRef = await db.collection("Games").add({
      name: this.name,
      description: this.description,
    });
    this.id = docRef.id;
    return docRef;
  }

  static async get(gameId) {
    const doc = await db.collection("Games").doc(gameId).get();
    if (!doc.exists) {
      throw new Error("Game not found");
    }
    return new Game(doc.data().name, doc.data().description);
  }
}

module.exports = Game;
