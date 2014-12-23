var express = require("express"),
  app = express();
  ejs = require("ejs");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.render('index');
});

app.get('*', function(req,res){
  res.status(404);
  res.render('404');
});


app.listen(process.env.PORT || 3000, function(){
  console.log("get this party started on port 3000");
});