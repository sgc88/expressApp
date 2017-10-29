var  express = require('express');

var app = express(); // yeni app yaptigimizda her zaman ilk kodumuz bu olur
app.get('/', function(req, res){
  res.send('Hello world');
});

app.listen(3000, function(){
  console.log('listening to 3000..')
});
