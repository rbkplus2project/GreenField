const userRouter = require('express').Router();
const userCtrl = require('./userController.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const hash = require('../../middleware/hash')

userRouter.route('/signup')
  .post((req, res) => {
    userCtrl.create(req.body, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.sendStatus(200);
      }
    });
    // console.log(req.body);
  });

userRouter.route('/signin')
  .post((req, res) => {
    userCtrl.find({ username: req.body.username }, async (err, data) => {
      if (err) {
        res.sendStatus(500);
      } else if (data.length === 0) {
        res.status(404).send('user not found');
      } else {
        try {
          const valid = await bcrypt.compare(req.body.password, data[0]._doc.password);
          if (valid) {
            const token = jwt.sign({ _id: data[0]._doc._id }, 'duwjieurbyve');
            console.log(token);
            let {username, games, _id, profile} = data[0]._doc
            res.header('auth-token', token).json({username: username, games: games, _id: _id, profile: profile});
          } else {
            res.status(400).send('password incorrect');
          }
        } catch (error) {
          console.log(error);
          res.sendStatus(500);
        }
      }
    });
  });
userRouter.route('/removeuser')
  .delete((req, res) => {
    userCtrl.delete(req.body, (err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(data);
      }
    });
  });
  
  userRouter.route('/:username')
  .put((req, res) => {
    userCtrl.update(req.params, req.body, (err, data) => {
      if (data.ok === 0) {
        res.sendStatus(400)
      }
      else {
        res.json(data)
      }
    })
  })
  .post(hash, (req, res) => {
    userCtrl.update(req.params, req.body, (err, data) => {
      if (data.ok === 0) {
        res.sendStatus(400) 
      } else {
        res.sendStatus(200)
      }
    })
  })


module.exports = userRouter;
