const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongo = require('./database');
const { response } = require('express');

let app = express();

mongo();


app.use(cors());
app.use(express.static(__dirname + '/../frontend'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user/signup', require('./middleware/hash.js'));
app.use('/user', require('./database/resources/userRouter'));
app.use('/game', require('./database/resources/gameRouter'));
app.use(cookieParser());


app.get('/',function(req,resp){
const oneDayToSeconds = 24 * 60 * 60;
resp.cookie('firstCookie','first',{maxAge:oneDayToSeconds});
resp.end('')
});

app.get('/removeCookie',function(req,resp){
  const oneDayToSeconds = 24 * 60 * 60;
  resp.clearCookie('firstCookie','first',{maxAge:oneDayToSeconds});
  resp.end('')
  });

let port = 3000;

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});


module.exports = app;

