const router = require('express').Router();

const Jokes = require('./jokesModel');

// Get all jokes
router.get('/', async (req, res) => {
  try {
    const jokes = await Jokes.find();

    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error`, error });
  }
});

module.exports = router;
