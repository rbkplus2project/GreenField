// create user data base
const mongoose = require('mongoose');
var db = () => mongoose.connect('mongodb://localhost/gamesio');

module.exports = db;


// export mongo