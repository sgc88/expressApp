var  express = require('express');
var bodyParser =  require('body-parser');
var db = require('./models');


var app = express(); // yeni app yaptigimizda her zaman ilk kodumuz bu olur

//middleware
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile('views/index.html', {root: __dirname}); // bu sekilde html endpint kullanmis oluyoruz
});

app.listen(3000, function(){
  console.log('listening to 3000..')
});
