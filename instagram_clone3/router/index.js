var express = require('express')
var app = express()
var router = express.Router();
var path = require('path')
//var login = require('./login/login')


router.get('/',(req, res) => {
    res.sendFile(path.join(__dirname , '../public/index.html'));   
});

router.get('/page1', (req, res) => {
    //res.sendFile(path.join(__dirname , '../public/page1.html'));
    res.redirect('/');
});

router.get('/page2', (req, res) => {
    //res.sendFile(path.join(__dirname , '../public/page2.html'));
    res.redirect('/');
});




router.get('/count', function(req, res){

    if(req.session.count){
        req.session.count++;    
    }

    else{
        req.session.count = 1;
    }
    res.send('count : ' + req.session.count);

});


router.post('/',(req, res) => {

    const user = {

        username:'instagram@gmail.com',
        password:'12345678',
        displayName:'인스타그램님'
    
    };


    const uname = req.body.username;
    const pwd = req.body.password;


    if(uname === user.username && pwd === user.password){
        req.session.displayName = user.displayName;

            res.sendFile(path.join(__dirname , '../public/page1.html'));

    } 
    
    else{

        res.send(`


            <h2> 아이디 혹은 비밀번호가 잘못되었습니다. </h2>
            <a href="/">돌아가기</a>


        `);

    }

});
  
router.get('/logout', function(req, res){

    res.redirect('/');

});




//router.use('/login',login)

module.exports = router;