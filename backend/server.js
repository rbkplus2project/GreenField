const express = require('express');
const cors = require('cors');
// const mongo = require('./database/mongo');
// const mysql = require('./database/mysql');

let app = express();

app.use(express.static(__dirname + '/../frontend'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let port = 3000;

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});