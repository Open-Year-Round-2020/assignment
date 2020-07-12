var express = require('express');
var http = require('http');
var path = require('path');
var static = require('serve-static');

var app = express();
var router = express.Router();

app.use(static(path.join(__dirname,'/')));
app.set('port',process.env.PORT||3000);



var server = app.listen(3000, function () {
    console.log("Express server has started on port 3000")
});

