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

    console.log(addedFavJoke);
    const joke = await Jokes.findById(addedFavJoke.joke_id);

    const sendFavJoke = { ...addedFavJoke };

    sendFavJoke.first_line = joke.first_line;
    sendFavJoke.punchline = joke.punchline;

    const user = await Users.findById(joke.user_id);

    sendFavJoke.usernameOfJoke = user.username;

    res
      .status(201)
      .json({ message: `Favorite Joke added`, favoritedJoke: sendFavJoke });
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error`, error });
  }
});

// Delete a user favorite by favorite id
router.delete('/:id', authorization, async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const deleteFavJoke = await UserFavorites.remove(id);

    const favoriteJokes = await UserFavorites.findByUserId(req.user.id);
    if (deleteFavJoke) {
      res.status(200).json(favoriteJokes);
    } else {
      res
        .status(404)
        .json({ message: `Could not find a favorite with the id of ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error`, error });
  }
});

module.exports = router;
