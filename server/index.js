var express = require('express');
var fs = require('fs')
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/rest/games/log', function(req, res){
	fs.readFile('./games.log', 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  res.send(data);
	});
  
});

module.exports = app;