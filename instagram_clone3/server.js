const express = require('express');
const path = require('path');
const app = express();

const router = require('./router/index.js')



const session = require('express-session');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))


app.use(express.static(path.join(_irname + '/public')));

app.use(session({
  secret: 'a98yhfi&o2u3bn0(rfuw-gvjoiah3@0945u23r#',
  resave: false,
  saveUninitialized: true
}));





app.listen(3000, () => {
  console.log(`3000번 port에 server를 띄웠습니다.`)
})

app.use(router)