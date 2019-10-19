const router = require('express').Router();

const User = require('../user/userModel');

router.get('/', (req, res) => {
  User.findById(2).then(res => {
    console.log(res);
  });
});

module.exports = router;
