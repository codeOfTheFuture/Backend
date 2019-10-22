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
    newJoke.first_line = body.first_line;
    newJoke.punchline = body.punchline;

    console.log(newJoke);

    const addedJoke = await Jokes.add(newJoke);

    res.status(201).json({ joke: addedJoke });
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
      console.log(updatedJoke);
      res.status(200).json(updatedJoke);
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
      res.status(200).json({ message: `Removed ${deleted}` });
    } else {
      res.status(404).json({
        message: `Could not find the joke with the id of ${deleted}`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error`, error });
  }
});

module.exports = router;
