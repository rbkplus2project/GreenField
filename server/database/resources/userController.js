// import schemas
const { send } = require('@sendgrid/mail');
const User = require('./user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const handleErrors = require('./authController.js').handleErrors;
// const hashed = require('../../middleware/hash.js').ash;
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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
    // console.log("+++++++>gh", token)
    res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
    // res.status(201);
    // res.send(user._id);
    // res.json({ user: user._id })
    next();
  }
  catch (err) {
    const errors = handleErrors(err);
    console.log({errors})
    // res.status(400).json({ errors });
    res.send({errors});
    // next();
  }
}

exports.login = async function (req, res, next) {
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
    // res.status(400).json({});
    res.send({ errors });
  }

};

exports.reset = async function (req, res, next) {

  const { username, email, password } = req.body
  const user = await User.findOne({ email })
  // console.log(user)
  if (!user) {
    // return res.json({ status: 'ok' })
    return 'No user found with that email address.'
  }

  const token = crypto.randomBytes(32).toString('hex');

  var expireDate = new Date();
  expireDate.setHours(expireDate.getHours() + 3);

  await User.findOneAndUpdate({ email: req.body.email }, { expiration: expireDate, token: token, used: 0 })

  const msg = {
    to: user.email, // Change to your recipient  //req.headers.host  //process.env.SENDGRID_TO
    from: process.env.SENDGRID_FROM, // Change to your verified sender  
    subject: 'From gamsio.com',
    text: 'Weclome to our host Gaming website, Hope you Enjoy your experience You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
      'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
      'http://' + "localhost:3001" + '/reset/' + token + '\n\n' +
      'If you did not request this, please ignore this email and your password will remain unchanged.\n'
  }

  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     console.log('Email sent')
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })

};

exports.newPassword = async function (req, res, next) {
  // console.log("=========", req.params)
  const { username, email, password, token } = req.body
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);

  const user = await User.findOne({ expiration: { $gt: Date.now() }, used: { $lt: 1 }})
  // console.log(typeof hash)
  if (!user) {
    // return res.json({ status: 'ok' })
    return 'Password reset token is invalid or has expired.'
  }

  await User.findOneAndUpdate({ token: req.body.token }, { password: hash, used: 1 });

  /*
    const msg = {
      to: process.env.SENDGRID_TO, // Change to your recipient  //req.headers.host
      from: process.env.SENDGRID_FROM, // Change to your verified sender
      subject: 'From gamsio.com',
      text: 'Weclome to our host Gaming website, Hope you Enjoy your experience You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://' + 3001 + '/reset/' + token + '\n\n' +
        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    }
    
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
      */
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
