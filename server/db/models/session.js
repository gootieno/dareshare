const { db, admin } = require("../index");

class GameSession {
  constructor(gameId, hostUserId, invitedUsersIds = []) {
    this.gameId = gameId;
    this.hostUserId = hostUserId;
    this.invitedUsersIds = invitedUsersIds;
    this.joinedUsersIds = [];
    this.status = "active";
  }

  async save() {
    const docRef = await db.collection("GameSessions").add({
      gameId: this.gameId,
      hostUserId: this.hostUserId,
      invitedUsersIds: this.invitedUsersIds,
      joinedUsersIds: this.joinedUsersIds,
      status: this.status,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    this.id = docRef.id;
    return docRef;
  }

  static async get(sessionId) {
    const doc = await db.collection("GameSessions").doc(sessionId).get();
    if (!doc.exists) {
      throw new Error("Game session not found");
    }
    const data = doc.data();
    const session = new GameSession(
      data.gameId,
      data.hostUserId,
      data.invitedUsersIds
    );
    session.joinedUsersIds = data.joinedUsersIds;
    session.status = data.status;
    return session;
  }
}

module.exports = GameSession;
