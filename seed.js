var db = require('./models');

var todo_list = [
  {
    author: "John",
    description: "Take Max to park",
    difficultyLevel:3
  },
  {
    author: "Shirin",
    description: "do homework",
    difficultyLevel: 5
  },
  {
    author: "George",
    description: "go to school",
    difficultyLevel: 1
  },
  {
    author: "Mom",
    description: "get haircut",
    difficultyLevel: 2
  },
  {
    author: "Ama",
    description: "take a walk in am",
    difficultyLevel: 5
  },
  {
    author: "Scott",
    description: "Watch tv",
    difficultyLevel: 4
  },
  {
    author: "Uro",
    description: "go to work",
    difficultyLevel: 4
  }
];


db.Todo.remove({}, function(error, todos){
  if (error){
    console.log('error accoured in remove', error);
  }else{
    console.log('Removed all the todos from db...');
    db.Todo.create(todo_list, function(error, todos){
      if(error){
        return console.log('error creating list', error);
      }else{
        console.log('Created', todos.length, 'todos');
        process.exit();
      }
    });
  }
});
