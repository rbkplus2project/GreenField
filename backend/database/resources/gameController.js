const Game = require('./game');

exports.find = function (req, res) {
  Game.find(req, res);
};