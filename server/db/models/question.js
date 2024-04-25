const { db } = require("../index");

class Question {
  constructor(text, categoryId) {
    this.text = text;
    this.categoryId = categoryId;
  }

  async save(gameId) {
    const docRef = await db
      .collection("Games")
      .doc(gameId)
      .collection("Questions")
      .add({
        text: this.text,
        categoryId: this.categoryId,
      });
    this.id = docRef.id;
    return docRef;
  }

  static async getByCategory(gameId, categoryId) {
    const snapshot = await db
      .collection("Games")
      .doc(gameId)
      .collection("Questions")
      .where("categoryId", "==", categoryId)
      .get();
    return snapshot.docs.map(
      (doc) => new Question(doc.data().text, doc.data().categoryId)
    );
  }
}

module.exports = Question;
