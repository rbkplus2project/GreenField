const express = require('express');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const mongo = require('./database');



let app = express();

mongo();
// app.use(session({ secret: 'session secret key' }));

app.use(cors());
app.use(express.static(__dirname + '/../public'));
// app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/user/signup', require('./middleware/hash.js'));
app.use('/user', require('./database/resources/userRouter'));
// app.use('/game', require('./database/resources/gameRouter'));
// app.use('/test', require('./database/resources/testpath'));

// app.get('/set-cookies', (req, res) => {

//   res.setHeader('Set-Cookie', 'newUser=true');

//   // res.cookie('newUser', false);
//   // res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });

//   res.send('you got the cookies!');

// });

let port = 3000;

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});

module.exports = app;
