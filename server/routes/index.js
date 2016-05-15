var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/protected', function (req, res, next) {
  console.log(req.headers);
  passport.authenticate('jwt', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    if (user) {
      return res
        .status(200)
        .json({ secret: '123' });
    }
  })(req, res, next);
});

module.exports = router;
