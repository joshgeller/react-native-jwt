var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({});

// See passport-local-mongoose docs for schema customization options
// https://github.com/saintedlama/passport-local-mongoose#options
User.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameUnique: true
});

module.exports = mongoose.model('User', User);
