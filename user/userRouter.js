const router = require('express').Router();
const authorization = require('../config/auth');
const Users = require('../user/userModel');
const Jokes = require('../jokes/jokesModel');

router.get('/:id', authorization, async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findById(id);
    const jokes = await Jokes.findByUserId(id);

    const sendUser = { ...user };

    sendUser.jokes = jokes;

    user
      ? res.status(200).json(sendUser)
      : res.status(400).json({ message: 'Invalid user id' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

module.exports = router;
