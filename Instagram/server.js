var express = require('express');
var app = express();
var path = require("path");
var router = express.Router();

app.set('port', 3000);

app.get('/', function(req, res){
  res.send(path.join(__dirname+"/instagram_tasks/index.html"))
});
