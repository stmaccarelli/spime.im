// var http = require('http');
//
// var server = http.createServer(function(request, response) {
//
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
//
// });
//
// var port = process.env.PORT || 1337;
// server.listen(port);
//
// console.log("Server running at http://localhost:%d", port);

var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic('./public', {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(3000)
