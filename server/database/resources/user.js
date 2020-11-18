// create user schema
const mongoose = require('mongoose');
let userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  salt: String,
  games: Array,
  profile: String
});

let User = mongoose.model('User', userSchema);

module.exports = User;
