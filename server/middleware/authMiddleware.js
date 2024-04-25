// middleware/isDeveloper.js
const { admin } = require('../firebaseAdminInit');

const isDeveloper = async (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1]; // Assume Bearer token is used

  if (!token) {
    return res.status(401).send('No token provided');
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    if (decodedToken.developer === true) {
      req.user = decodedToken; // Attach user info to the request object
      next();
    } else {
      res.status(403).send('Access denied. User is not a developer.');
    }
  } catch (error) {
    res.status(403).send('Invalid token');
  }
};

module.exports = isDeveloper;
