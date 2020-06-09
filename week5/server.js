var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require("fs");
var router = require('./router/main')(app);
var path = require('path');
// ������ ���� �� �ֵ��� HTML �� ��ġ�� �������ݴϴ�. 

/*app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/views/week5-1.html'));
    
})*/

app.get('/week5-2.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/week5-2.html'));
})

app.set('views', __dirname + '/views');

// ������ HTML �������� �� ��, EJS������ ����ϵ��� �����մϴ�. 
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function () {
    console.log("Express server has started on port 3000")
});

// ��Ÿ��(CSS) �����ϱ�
app.use(express.static(path.join(__dirname + '/public')));

