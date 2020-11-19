// create user schema
const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

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
  // salt: String,
  token: String,
  games: Array,
  expiration: Date,
  createdAt: Date,
  updatedAt: Date,
  used: Number
});

// userSchema.statics.login = async function (username, password) {
//   const user = await this.findOne({ username });
//   console.log("+++++++>>",user)
//   if (user) {
//     const auth = await bcrypt.compare(password, user.password);
//     console.log(auth)
//     if (auth) {
//       return user;
//     }
//     throw Error('incorrect password');
//   }
//   throw Error('incorrect email');
// };

let User = mongoose.model('user', userSchema);

module.exports = User;
