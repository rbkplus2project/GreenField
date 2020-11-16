const Router = require('express').Router();
const verify = require('../../middleware/cookieAuth');


Router.get('/', verify, (req, res) => {
  res.send('test');
});

module.exports = Router;
