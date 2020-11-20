const Game = require('./game');

// finds data in the database
exports.find = function (req, res) {
  Game.find(req, res);
};

// adds data to the database
exports.create = function (req, res) {
  Game.create(req, res);
}

// removes data from the database
exports.remove = function (req, res) {
  Game.remove(req, res);
};
