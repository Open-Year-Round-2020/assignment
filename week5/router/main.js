 module.exports = function (app) {
     app.get('/', function (req, res) {
        
         res.render('../views/week5-1.html');
         //res.writeHead(200, { 'Content-Type': 'text/html' });
     });
     /*app.get('/about', function (req, res) {
         res.render('about.html');
     });*/
     app.get('/feed',function(req,res){
         res.render('../views/week5-2.html');
     })

     app.get('/post', function (req, res) {
         res.render('../views/week5-3.html');
     })
 }