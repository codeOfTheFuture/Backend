const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

const Users = require('../user/userModel');
const Jokes = require('../jokes/jokesModel');
const UserFavorites = require('../userFavorites/userFavoritesModel');

// Register a user
router.post('/register', async (req, res) => {
  try {
    const user = req.body;

    const hashPassword = bcrypt.hashSync(user.password, 14);

    user.password = hashPassword;

    const newUser = await Users.add(user);

    const { id, username, email, date_created } = newUser;

    const token = generateToken(id);

    res.status(201).json({
      user: {
        id,
        username,
        email,
        date_created,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Users.findBy({ username }).first();

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user.id);

      const { id } = user;

      const jokes = await Jokes.findByUserId(id);

      const favorites = await UserFavorites.findByUserId(id);

      const sendFavorites = favorites.map(async fav => {
        const joke = await Jokes.findById(fav.joke_id);
        const user = await Users.findById(joke.user_id);

        return {
          ...fav,
          usernameOfJoke: user.username,
          first_line: joke.first_line,
          punchline: joke.punchline,
        };
      });

      Promise.all(sendFavorites).then(favorites => {
        const sendUser = {};

        sendUser.id = user.id;
        sendUser.username = user.username;
        sendUser.email = user.email;
        sendUser.date_created = user.date_created;
        sendUser.jokes = jokes;
        sendUser.favorites = favorites;

        res.status(200).json({
          user: sendUser,
          token,
        });
      });
      console.log(favorites);
    } else {
      res.status(401).json({ message: 'Invalid Credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
});

// // Validates if a user field is present
// const validateUser = userField => {
//   !userField && {
//     badRequest: true,
//     response: res.status(400).json({ message: `${userField} is required.` }),
//   };
// };

// Generate JSON Web Token
const generateToken = id => {
  return jwt.sign({ id }, secret.jwtSecret, { expiresIn: '1d' });
};

module.exports = router;
