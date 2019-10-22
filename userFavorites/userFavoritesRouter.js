const router = require('express').Router();
const authorization = require('../config/auth');

const Users = require('../user/userModel');
const Jokes = require('../jokes/jokesModel');
const UserFavorites = require('./userFavoritesModel');

// Add a joke to a users favorites by joke id
router.post('/:id', authorization, async (req, res) => {
  const jokeId = req.params.id;
  const userId = req.user.id;

  try {
    const favJoke = {};

    favJoke.user_id = userId;
    favJoke.joke_id = Number(jokeId);

    const addedFavJoke = await UserFavorites.add(favJoke);

    res
      .status(201)
      .json({ message: `Favorite Joke added`, favoritedJoke: addedFavJoke });
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error`, error });
  }
});

module.exports = router;
