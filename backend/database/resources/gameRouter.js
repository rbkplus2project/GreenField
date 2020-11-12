const gameRouter = require('express').Router();
const gameCtrl = require('./gameController');


gameRouter.route('/:game')
    .get((req, res) => {
      gameCtrl.find(req.params, (err, data) => {
        if (err) {
          res.status(404).send('game not found');
        } else {
          res.send(':)');
        }
      });
    });

module.exports = gameRouter;
