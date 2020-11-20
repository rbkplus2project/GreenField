const mongoose = require('mongoose');

// new schema for hosted games
let gameSchema = mongoose.Schema({
  url: String,
  imgs: Array,
  disc: Object,
  postedBy: String
});

// add the model to the database
let Game = mongoose.model('Game', gameSchema);

module.exports = Game;
