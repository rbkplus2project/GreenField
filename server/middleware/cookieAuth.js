const jwt = require('jsonwebtoken');

var verifyCookie = (req, res, next) => {
  const token = req.header('auth-token');
  console.log(token);
  if (!token) { return res.send('no cookie'); }
  
    
  try {
    const verified = jwt.verify(token, 'duwjieurbyve');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = verifyCookie;