const express = require('express');
const globalMiddleware = require('../config/globalMiddleware');

const server = express();

globalMiddleware(server);

server.get('/', (req, res) => {
  res.send('Dad Jokes');
});

module.exports = server;
