const { db } = require("./firebaseAdminInit");

const addDocument = (collection, data) => {
  return db.collection(collection).add(data);
};

module.exports = addDocument;
