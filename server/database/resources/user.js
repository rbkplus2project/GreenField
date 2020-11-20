const mongoose = require('mongoose');
const { isEmail } = require('validator');

// creates user schema
let userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    unique: true, 
    required: true 
  },
  email: { 
    type: String, 
    unique: true, 
    lowercase: true, 
    required: [true, 'Please enter an email'],
    validate: [isEmail, 'Please enter a valid email']
  },
  password: { 
    type: String, 
    required: [true, 'Please enter a password'],
    minlength: [5, 'Minimum password length is 5 characters'],
  },  
  token: String,
  games: Array,
  expiration: Date,
  used: Number,
  profile: String
});

// adds user model
let User = mongoose.model('user', userSchema);

module.exports = User;
