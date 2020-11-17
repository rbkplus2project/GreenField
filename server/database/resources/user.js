// create user schema
const mongoose = require('mongoose');
let userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  email: { type: String, unique: true },
  password: {rype: String},
  salt: String,
  games: Array,
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

let User = mongoose.model('User', userSchema);

module.exports = User;
