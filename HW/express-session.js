var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
var FileStore = require('session-file-store')(session)

var app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store:new FileStore()
}))

app.get('/', function (req, res, next) {
  if(req.session.num === undefined){
    req.session.num = 1;
  }else{
    req.session.num = req.session.num + 1;
  }
  res.send(`
  <form action="/" method="post">
    <p>
      <input type="text" id="id" placeholder="아이디 입력">
    </p>
    <p>
      <input type="password" id="password" placeholder="비밀번호 입력">
    </p>
    <p>
      <button type="submit">Login</button>
    </p>
  </form>`);
})

app.listen(3000, function(){
    console.log('3000!');
});