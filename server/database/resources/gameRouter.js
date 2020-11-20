const gameRouter = require('express').Router();
const gameCtrl = require('./gameController');

// Loads all games to landing page
gameRouter.route('/')
  .get((req, res) => {
    gameCtrl.find({}, (err, data) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.json(data);
      }
    });
  })

// adds a game to database
  .post((req, res) => {
    console.log(req.body)
    gameCtrl.create(req.body, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(data);
      }
    })
  })

// Finds one game from database
gameRouter.route('/:game')
  .get((req, res) => {
    gameCtrl.find(req.params, (err, data) => {
      if (err) {
        res.sendStatus(400);
      } else if (data.length === 0) {
        res.status(404).send('game not found');
      } else {
        res.json(data[0]._doc.url);
      }
    });
  });

// Deletes a game from database
gameRouter.route('/:_id')
  .delete ((req, res) => {
    gameCtrl.remove(req.params, (err, data) => {
      if (err) {
        res.sendStatus(400)
      } else {
        res.sendStatus(200)
      }
    })
  })

module.exports = gameRouter;
