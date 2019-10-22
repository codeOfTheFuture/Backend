const router = require('express').Router();
const authorization = require('../config/auth');
const Users = require('../user/userModel');
const Jokes = require('../jokes/jokesModel');
const UserFavorites = require('../userFavorites/userFavoritesModel');

// Get User By Id
router.get('/:id', authorization, async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findById(id);
    const jokes = await Jokes.findByUserId(id);
    const favorites = await UserFavorites.findByUserId(id);

    const sendUser = { ...user };

    sendUser.jokes = jokes;
    sendUser.favorite_jokes = favorites;

    user
      ? res.status(200).json(sendUser)
      : res.status(400).json({ message: 'Invalid user id' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// Update User By Id
router.put('/:id', authorization, async (req, res) => {
  const {
    params: { id },
  } = req;
  const changes = req.body;
  try {
    const user = await Users.findById(id);

    if (user) {
      const updatedUser = await Users.update(changes, id);
      res.status(200).json(updatedUser);
    } else {
      res
        .status(404)
        .json({ message: `There is no user with the id of ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error`, error });
  }
});

module.exports = router;
