const gameRouter = require('express').Router();
const gameCtrl = require('./gameController');


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

gameRouter.route('/:game')
  .get((req, res) => {
    //   res.json(req.params);
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
// .post((req, res) => {
//   req.params.url = 'https://memory-game-1.herokuapp.com/index.html';
//   gameCtrl.create(req.params, (err, data) => {
//     if (err) {
//       res.sendStatus(400);
//     } else {
//       res.json(data);
//     }
//   });
// });

module.exports = gameRouter;
