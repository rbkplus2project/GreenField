const express = require('express');
const path = require('path');
const cors = require('cors');
const mongo = require('./database');

let app = express();

mongo();

app.use(cors());
app.use(express.static(__dirname + '/../build'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user/signup', require('./middleware/hash.js'));
app.use('/user', require('./database/resources/userRouter'));
app.use('/game', require('./database/resources/gameRouter'));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"))
})

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log('Listening on port: ' + port);
});

module.exports = app;
