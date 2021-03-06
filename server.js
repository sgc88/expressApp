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

app.get('/todos/:id', function(req, res){
  res.sendFile('views/todo.html', {root : __dirname});
});
app.get('/todos/:id/edit', function(req, res){
  res.sendFile('views/editTodo.html', {root: __dirname});
});

app.get('/todos', function(req, res){
  res.sendFile('views/allTodos.html', {root:__dirname});
});

app.get('/createTodo', function(req, res){
  res.sendFile('views/createTodo.html',{root:__dirname});
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

//only one todo
app.get('/api/todos/:id', function(req,res){
  db.Todo.findById({_id:req.params.id}, function(err, result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      res.json(result);
    }
  });
});

//PUt route to edit single todoTarget
app.put('/api/todos/:id', function(req, res){
  //go to the db and find todo  by using findById
  db.Todo.findById({_id:req.params.id}, function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      //set the properties of the original Todo to teh new values(from the form).
      result.author = req.body.author;
      result.description = req.body.description;
      result.difficultyLevel = req.body.difficultyLevel;
      //save the updated todo to db
      result.save(function(err, updatedItem){
        if(err){
          console.log(err);
        }else{
          console.log(updatedItem);
          //send the updated Todo to the client (res.json);
          res.json(updatedItem);
        }
      });
    }
  });
});

app.delete('/api/todos/:id', function(req, res){
  db.Todo.findOneAndRemove({_id:req.params.id}, function(err, result){
    if(err){
      console.log(err);
    }else{
      res.json(result);
    }
  });
});

app.post('/api/createTodo', function(req, res){
  console.log(req.body);
  var auth=req.body.author;
  var desc = req.body.description;
  var diff = req.body.difficultyLevel;

  var newTodo =new db.Todo({
      author:auth,
      description:desc,
      difficultyLevel:diff
  });

  newTodo.save(function(error, savedTodo){
    if(error){
      console.log(error);
    }else{
      res.json(savedTodo);
    }
  });
});




app.listen(3000, function(){
  console.log('listening to 3000..')
});
