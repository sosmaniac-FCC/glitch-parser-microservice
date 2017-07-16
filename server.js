// server.js
var express = require('express');
var app = express();

app.use(express.static('public'));

// exception case for chrome's aggressive favicon-ing
app.get('/favicon.ico', function(req, res) {
  res.status(204);
});

app.get('/send', function(req, res) {
  res.send(req.headers['x-forwarded-for'] + ' ' 
           + req.headers['accept-language']);
});

app.get('/sendmore', function(req, res) {
  res.send(req.headers['user-agent']);
});

// routing begins
app.get('/api/whoami', function (req, res) {
  res.sendFile(__dirname + '/correct/index.html');
});

// confirm request
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/incorrect/index.html');
});

app.listen(process.env.PORT)

/*
req: client -> server
res: server -> client
*/