
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());

var port = 60410;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.get('/impressum', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/sites/first.html'));
});


// has to be the last app.xxx
app.use(function (req, res, next) {
  res.status(404);
  // respond with htlm on error
  res.sendFile(path.join(__dirname + '/public/sites/404.html'));
});

app.listen(port);
console.log("");
console.log("Server listens on Port: " + port);

