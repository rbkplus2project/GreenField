const mongoose = require('mongoose');

let gameSchema = mongoose.Schema({
    
});

let Game = mongoose.model('Game', gameSchema);

module.exports = Game;