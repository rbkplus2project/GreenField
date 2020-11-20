const express = require('express');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const mongo = require('./database');

let app = express();

mongo();

app.use(cors());
app.use(express.static(__dirname + '/../build'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user/signup', require('./middleware/hash.js'));
app.use('/user', require('./database/resources/userRouter'));
app.use('/game', require('./database/resources/gameRouter'));

app.get('*', (req, res) => {
  let path = req.params['0'].substring(1)
  res.sendFile(`${__dirname}/build/${path}`)
})

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log('Listening on port: ' + port);
});

module.exports = app;
