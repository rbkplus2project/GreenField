const express = require('express');
const path = require('path');
const cors = require('cors');
const mongo = require('./server/database');

let app = express();

mongo();

app.use(cors());
app.use(express.static(__dirname + '/build'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user/signup', require('./server/middleware/hash.js'));
app.use('/user', require('./server/database/resources/userRouter'));
app.use('/game', require('./server/database/resources/gameRouter'));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"))
})

let port = 3000;

app.listen(process.env.PORT, () => {
  console.log('Listening on port: ' + process.env.PORT);
});

module.exports = app;
