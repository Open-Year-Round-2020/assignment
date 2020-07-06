module.exports = function(app)
{

   app.get('/',function(req,res){
      res.render('index.html')
   });
   app.get('/1',function(req,res){
      res.render('page1.html');
   });
    app.get('/2',function(req,res){
      res.render('page2.html');
  });

}
 
