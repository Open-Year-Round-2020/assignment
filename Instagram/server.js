var express = require('express');
var app = express();
var path = require("path");
var router = express.Router();

app.set('port', 3000);

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+"/index.html"))
});

var server = app.listen(3000, function(){
   console.log("Express server has started on port 3000");
  });

app.use(express.static(path.join(__dirname + "/instagram_tasks")));
