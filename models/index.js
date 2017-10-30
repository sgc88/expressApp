var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express1');

var db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});

db.once('open', function(){
  console.log('connected mongodb');
});

module.exports.Todo=require('./todo.js');
