const userRouter = require('express').Router();
const userCtrl = require('./userController.js');
const jwt = require('jsonwebtoken');
const path = require('path');

userRouter.route('/signup')
  .post((req, res, next) => {
    userCtrl.create(req, res, next);

  })
// .post((req, res) => {
//   userCtrl.create(req.body, (err, data) => {
//     if (err) {
//       res.sendStatus(400);
//     } else {
//       res.sendStatus(200);
//     }
//   });
//   // console.log(req.body);
// });

userRouter.route('/signin')
  .post((req, res, next) => {
    userCtrl.login(req, res, next);


    // userCtrl.find({ username: req.body.username }, async (err, data) => {
    //   if (err) {
    //     res.sendStatus(500);
    //   } else if (data.length === 0) {
    //     res.status(404).send('user not found');
    //   } else {
    //     try {
    //       const valid = await bcrypt.compare(req.body.password, data[0]._doc.password);
    //       if (valid) {
    //         const token = jwt.sign({ _id: data[0]._doc._id }, 'duwjieurbyve');
    //         console.log(token);
    //         res.header('auth-token', token).send(token);
    //       } else {
    //         res.status(400).send('password incorrect');
    //       }
    //     } catch (error) {
    //       console.log(error);
    //       res.sendStatus(500);
    //     }
    //   }
    // });
  });


userRouter.route('/reset')
  .post((req, res, next) => {
    userCtrl.reset(req, res, next)

  });

userRouter.route(`/reset/:token`)
  .get((req, res, next) => {
    
    console.log("88888888",req.body)
    // path.join(__dirname + './src/components/NewPassword.js')
    // console.log(res)
    // res.sendFile('./src/components/NewPassword.js', { root: __dirname });
    next();
  })

  .post((req, res, next) => {
    // console.log("=========",req)
    userCtrl.newPassword(req, res, next)
    // res.redirect('/signin');

  })





















userRouter.route('/removeuser')
  .delete((req, res) => {
    userCtrl.delete();
  });
  //   userCtrl.delete(req.body, (err, data) => {
  //     if (err) {
  //       res.sendStatus(500);
  //     } else {
  //       res.json(data);
  //     }
  //   });
  // });



module.exports = userRouter;
