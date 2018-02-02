var http = require("http");
var url = require("url");
var querystring = require("querystring");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
     console.log("Request for " + pathname + " received.");
     if (query != '') {
       console.log("Query data " + query + " received.");
     }

     route(handle, pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
