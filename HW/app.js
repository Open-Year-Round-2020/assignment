var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./server');
app.use(bodyParser.urlencoded({extended:false}));

//라우팅
app.use('/', require('./routes/pLogin.js'));
app.use('/peedPage', require('./routes/pPeed.js'));
app.use('/propilPage', require('./routes/pPropil.js'));

//경로 지정
app.use(express.static(__dirname + '/public'));

//서버 연결 확인
app.listen(3000, function () {
    console.log('Connected 3000 port!');
});

//DB
// db.query('SELECT * FROM login', function(error,results,fields){
//     console.log(results);
// });