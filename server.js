var  express = require('express');
var bodyParser =  require('body-parser');
var db = require('./models');


var app = express(); // yeni app yaptigimizda her zaman ilk kodumuz bu olur

//middleware
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

///// HTML ENDPOINTS /////

app.get('/', function(req, res){
  res.sendFile('views/index.html', {root: __dirname}); // bu sekilde html endpint kullanmis oluyoruz
});

app.get('/todos', function(req, res){
  res.sendFile('views/allTodos.html', {root:__dirname});
});
///// API ENDPOINTS /////


//GET ROUTES FOR ALL DOTOS

app.get('/api/todos', function(req, res){
  db.Todo.find({}, function(error, todos){
    if(error){
      console.log(error);
    }else{
      res.json(todos);
    }
  });
});




app.listen(3000, function(){
  console.log('listening to 3000..')
});
