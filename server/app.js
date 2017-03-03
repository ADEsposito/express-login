var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded( {
  extended:true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var logins = [];
var loginCheck = [];

app.get('/', function(req, res) {
  res.render('login')
})

app.get('/login-check', function(req, res) {
  res.render('login-check')
})

app.post('/logins', function(req, res) {
  logins.push({username: req.body.username, password: req.body.password});
  console.log(logins);
  //res.render('login', {loginsArray: logins});
})

app.post('/login-check', function(req, res) {
  loginCheck.push({username: req.body.username, password: req.body.password});
  console.log(loginCheck[0].username);

  for(i = 0; i < logins.length; i++) {
    if(logins[i].username === loginCheck[0].username) {
      console.log("username match!");
      if(logins[i].password === loginCheck[0].password) {
        console.log("password match!")
      }
    }
  }
})


server.listen(3000, function() {
  console.log("server is listening on port 3000");
})
