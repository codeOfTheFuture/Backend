const router = require('express').Router();
const authorization = require('../config/auth');

const Jokes = require('./jokesModel');

// Get all jokes
router.get('/', async (req, res) => {
  try {
    const jokes = await Jokes.find();

    const sendJokes = jokes.map(joke => {
      return { ...joke, rating: getRandomInt() };
    });

    res.status(200).json(sendJokes);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error`, error });
  }
});

// Get a joke by id
router.get('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const joke = await Jokes.findById(id);

    if (joke) {
      const sendJoke = { ...joke, rating: getRandomInt() };

      res.status(200).json(sendJoke);
    } else {
      res
        .status(404)
        .json({ message: `There is no joke with the id of ${id}` });
    }
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
    newJoke.first_line = body.first_line;
    newJoke.punchline = body.punchline;
    newJoke.private = body.private;

    console.log(newJoke);

    const addedJoke = await Jokes.add(newJoke);

    const sendJoke = { ...addedJoke, rating: getRandomInt() };

    res.status(201).json({ joke: sendJoke });
  } catch (error) {
    res.status(400).json({ message: `You did not add a joke`, error });
  }
});

// Update a joke
router.put('/:id', authorization, async (req, res) => {
  const {
    params: { id },
  } = req;

  const changes = req.body;

  try {
    const joke = await Jokes.findById(id);

    if (joke) {
      const updatedJoke = await Jokes.update(changes, id);

      const sendJoke = { ...updatedJoke, rating: getRandomInt() };

      res.status(200).json(sendJoke);
    } else {
      res
        .status(404)
        .json({ message: `There is no joke with the id of ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error`, error });
  }
});

// Delete a joke
router.delete('/:id', authorization, async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const deleted = await Jokes.remove(id);

    if (deleted) {
      console.log(deleted);
      res.status(200).json({ message: `Deleted Joke ${deleted}` });
    } else {
      res.status(404).json({
        message: `Could not find the joke with the id of ${id}`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error`, error });
  }
});

function getRandomInt() {
  return Math.floor(Math.random() * (6 - 3) + 3);
}

module.exports = router;
