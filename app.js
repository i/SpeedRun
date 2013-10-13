/**
 * Module dependencies.
 */

var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var server = http.createServer(app);
var io = require('socket.io').listen(server);


// all environments
app.set('port', 8080 || process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
    res.sendfile(__dirname + '/views/index.html');
});

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});


io.sockets.on('connection', function(socket) {
  console.log('someone connected');

  socket.on('location', function(loc) {
    console.log(loc);
  });

});

