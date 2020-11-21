var cookieParser = require('cookie-parser');
const mongo = require('./database');
const express = require('express');
const path = require('path');
const cors = require('cors');

// Creates a server
let app = express();

mongo();

// Define what the server will use
app.use(cors());
app.use(express.static(__dirname + '/../build'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user/signup', require('./middleware/hash.js'));
app.use('/user', require('./database/resources/userRouter'));
app.use('/game', require('./database/resources/gameRouter'));

// Responds to all get requests
app.get('/*', (req, res) => {
  console.log('asdfghjklkjhgfdsasdfghjk -------------------> ', __dirname)
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log('Listening on port: ' + port);
});

module.exports = app;
