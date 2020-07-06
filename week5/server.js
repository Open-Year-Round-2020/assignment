const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

let user = {
  id: 'helloworld@gmail.com',
  password: 'asdf0123'
};

app.use(session({
  secret:'123456',
  resave: false,
  saveUninitialized: true
}));

function CheckSession() {
  var sessionid = '<%=Session["username"] != null%>';
  if (sessionid == false) {
      alert("Your Session has expired");
  }
}

app.use(bodyParser.urlencoded({
  extended:false
}));

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.post('/login', function (req, res) {
  if(user.id == req.body.id && user.password == req.body.password){
    req.session.is_logined = true;
    req.session.nickname = user.id;
    res.redirect('/feed');
  } else {
    res.redirect('/');
  }
});

app.get('/feed', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'feed.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'profile.html'));
  });

app.listen(1234, () => {
  console.log('Express App on port 1234!');
});