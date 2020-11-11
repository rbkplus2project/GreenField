const express = require('express');
const cors = require('cors');
const mongo = require('./database/mongo');
const hash = require('./middleware/hash.js');

let app = express();

mongo();


app.use(cors());
app.use(express.static(__dirname + '/../frontend'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', hash);


let port = 3000;

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});

module.exports = app;
