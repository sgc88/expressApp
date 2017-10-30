# expressApp

bu app express icin ilk adimdir.
app.use(express.static('public')) => middleware; app.js ile kullanici tarafindaki dosyalari birbiriyle iliskilendirir.

simdi sira kullanici tarafini server tarafiyla/ database ile nasil iliskilendiricez:
1- create the model
mesela Todo listesi yapalim:
 Todo:
author: String,
todo: String,
difficultyLevel: Number
2- Setup/configure DataBase
3- Create Seed.js


index.js => connects to db and require todo model
