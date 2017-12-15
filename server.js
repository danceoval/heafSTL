var express = require('express');
var path = require('path');

var app = express();


app.use('/', express.static(path.join(__dirname, '/')))


app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname + '/index.html'))
})


app.listen(8080)