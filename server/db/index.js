const admin = require("firebase-admin");
const path = require('path');
const serviceAccountPath = path.resolve(process.env.FIREBASE_SERVICE_ACCOUNT);
const serviceAccount = require(serviceAccountPath);


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { db, admin };
