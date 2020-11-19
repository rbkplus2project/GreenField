const mongoose = require('mongoose');

let gameSchema = mongoose.Schema({
  url: String,
  imgs: Array,
  disc: Object,
  postedBy: String
});

// {
//   name: 'memory',
//   type: 'puzzle',
//   dificulty: 'easy and hard'
// }

let Game = mongoose.model('Game', gameSchema);

module.exports = Game;
