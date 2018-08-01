// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp/', (req, res) => {
  const timestamp = {};
  const currentTime = new Date();
  
  timestamp.unix = currentTime.getTime();
  timestamp.utc = currentTime.toUTCString();
  res.json(timestamp);
});

app.get('/api/timestamp/:date', (req, res) => {
  const date = new Date(Date.parse(req.params.date));
  const timestamp = {};
  
  if (date.toString() != 'Invalid Date') {
    timestamp.unix = date.getTime();
    timestamp.utc = date.toUTCString();
    res.json(timestamp);
  } else {
    res.json({error: 'Invalid Date'});
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
