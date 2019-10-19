const router = require('express').Router();
const authorization = require('../config/auth');

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

// Add a joke
router.post('/', authorization, async (req, res) => {
  try {
    const {
      user: { id },
      body,
    } = req;

    const newJoke = {};

    newJoke.user_id = String(id);
    newJoke.joke = body.joke;
    newJoke.setup = body.setup;
    newJoke.delivery = body.delivery;

    console.log(newJoke);

    const addedJoke = await Jokes.add(newJoke);

    res.status(201).json({ joke: addedJoke });
  } catch (error) {
    res.status(400).json({ message: `You did not add a joke`, error });
  }
});

module.exports = router;
