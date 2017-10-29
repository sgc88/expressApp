var  express = require('express');

var app = express(); // yeni app yaptigimizda her zaman ilk kodumuz bu olur
app.get('/', function(req, res){
  res.sendFile('views/index.html', {root: __dirname}); // bu sekilde html endpint kullanmis oluyoruz 
});

app.listen(3000, function(){
  console.log('listening to 3000..')
});
