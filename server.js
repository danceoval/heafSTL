var express = require('express');
var path = require('path');

var app = express();


app.use('/', express.static(path.join(__dirname, '/')))


app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname + '/index.html'))
})


app.listen(process.env.PORT || 8080)