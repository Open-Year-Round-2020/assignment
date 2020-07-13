var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var router = express.Router();
var db = require('../server');

router.get('/', function (req, res) {
    var filePath = path.join(__dirname, '../public/html/HW1.html');
    fs.readFile(filePath, function (er, data) {
        if (er) {
            console.log(er);
        } else {
            res.end(data);
        }
    });
});

router.post('/peedPage', function (req, res) {
    var filePath = path.join(__dirname, '../public/html/HW2.html');
    db.query('SELECT * FROM login', function (error, results, fields) {
        if (error) {
            console.log(error);
        } else if (results[0].id === req.body.id && results[0].password === req.body.password) {
                fs.readFile(filePath, function (er, data) {
                    if (er) {
                        console.log(er);
                    } else {
                        res.end(data);
                    }
                });
        } else {
            res.send('뒤로 가시오');
        }
    });
})

module.exports = router;