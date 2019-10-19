const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token)
    res.status(401).json({ message: 'You do not have permission, no token' });

  try {
    const decoded = jwt.verify(token, secret.jwtSecret);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'You do not have permission.' });
  }
};
