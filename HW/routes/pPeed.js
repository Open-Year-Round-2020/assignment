var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var router = express.Router();

router.get('/', function(req,res){
    var filePath = path.join(__dirname, '../public/html/HW2.html');
    fs.readFile(filePath, function(er,data){
        if(er){
            console.log(er);
        }else{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

module.exports = router;
