const bcrypt = require('bcrypt');
const Joi = require('joi');

var schema = Joi.object({
  username: Joi.string().min(4).required(),
  password: Joi.string().min(5).required()
});

// Changes password to hash so it stays secured
var ash = async (req, res, next) => {
  var valid = await schema.validate(req.body);
  if (valid.error) { return res.status(400).send(valid.error.details[0].message); } 
  // req.body.password;
  // var salt = bcrypt.genSalt(10)
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hash;
  req.body.salt = salt;
  next();
  // req.body.password = newPassHash
};

module.exports = ash;
