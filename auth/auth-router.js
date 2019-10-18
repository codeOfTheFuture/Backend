const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

const Users = require('../user/userModel');

// Register a user
router.post('/register', async (req, res) => {
  // Validates if any required user fields are missing and returns a bad request response
  // validateUser(username).badRequest
  //   ? validateUser(username).response
  //   : validateUser(password).badRequest
  //   ? validateUser(password).response
  //   : validateUser(email).badRequest
  //   ? validateUser(email).response
  //   : validateUser(date_created).badRequest && validateUser(date).response;

  try {
    // const user = {
    //   username,
    //   password,
    //   email,
    //   date_created,
    // };

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
    // console.log(username, password);

    const user = await Users.findBy({ username }).first();

    console.log('anything');
    console.log(user);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user.id);

      res.status(200).json({
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          date_created: user.date_created,
        },
        token,
      });
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
