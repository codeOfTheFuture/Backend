const express = require('express');
const globalMiddleware = require('../config/globalMiddleware');
const authRouter = require('../auth/auth-router');

const server = express();

globalMiddleware(server);

server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
  res.send('Dad Jokes');
});

module.exports = server;
