var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/secret', function (req, res, next) {
  passport.authenticate('jwt', function (err, user, info) {
    console.log(info)
    console.log(user)
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    if (user) {
      return res
        .status(200)
        .json({ secretCode: '123' });
    }
  })(req, res, next);
});

module.exports = router;
