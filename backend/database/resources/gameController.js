const Game = require('./game');

exports.find = function (req, res) {
  Game.find(req, res);
};

// exports.create = function (req, res) {
//   Game.create(req, res);
// };