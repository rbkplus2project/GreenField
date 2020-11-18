// import schemas
const { send } = require('@sendgrid/mail');
const User = require('./user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const handleErrors = require('./authController.js').handleErrors;

const maxAge = 1 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'duwjieurbyve', {
    expiresIn: maxAge
  });
};

exports.create = async function (req, res, next) {
  const { username, email, password } = req.body
  try {
    const user = await User.create({ username, email, password });
    const token = createToken(user._id);
    console.log("+++++++>gh",token)
    res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 }); 
    res.status(201).json({ user: user._id });
    // res.status(201);
    // res.send(user._id);
    // res.json({ user: user._id })
    next();
  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
    // res.status(400).send({errors});
  }
}

exports.login = async function (req, res, next) {

  // const { username, email, password } = req.body;

  // try {
  //   const user = await User.login(username, password);
  //   res.status(200).json({ user: user._id });
  // } catch (err) {
  //   res.status(400).json({});
  // }
  const { username, email, password } = req.body

  try {
    const user = await User.findOne({ username });
    // console.log("+++++++>>", user)
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      // console.log(auth)
      if (auth) {
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id });
        // next();
        return user;
        
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email');
    
  }

  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({});
  }

};

exports.delete = function (req, res, next) {
  User.findOneAndDelete({ username: req.body.username })
    .then(result => {
      console.log(result);
      next();
    })
    .catch(err => {
      console.log(err);
    });
};

