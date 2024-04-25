const { db } = require("../index");

class Category {
  constructor(name) {
    this.name = name;
  }

  async save(gameId) {
    const docRef = await db
      .collection("Games")
      .doc(gameId)
      .collection("Categories")
      .add({
        name: this.name,
      });
    this.id = docRef.id;
    return docRef;
  }

  static async getAll(gameId) {
    const snapshot = await db
      .collection("Games")
      .doc(gameId)
      .collection("Categories")
      .get();
    return snapshot.docs.map((doc) => new Category(doc.data().name));
  }
}

module.exports = Category;
