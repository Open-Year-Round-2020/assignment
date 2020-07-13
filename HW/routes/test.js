var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var router = express.Router();
var db = require('../server');

router.get('/', function (req, res) {
    var filePath = path.join(__dirname, '../public/html/HW1 copy.html');
    fs.readFile(filePath, function (er, data) {
        if (er) {
            console.log(er);
        } else {
            // res.writeHead(200, {'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

router.post('/login', function (req, res) {
    var filePath = path.join(__dirname, '../public/html/HW2.html');
    db.query('SELECT * FROM login', function (error, results, fields) {
        if (error) {
            console.log(error);
        } else if (results[0].id === req.body.id && results[0].password === req.body.password) {
            // res.send('Hello');
            // router.get('../peedPage', function(req,res){ 
                fs.readFile(filePath, function (er, data) {
                    if (er) {
                        console.log(er);
                    } else {
                        // res.writeHead(200, {'Content-Type':'text/html'});
                        res.end(data);
                    }
                });
            // });
        } else {
            res.send('fail');
        }
    });
})

module.exports = router;