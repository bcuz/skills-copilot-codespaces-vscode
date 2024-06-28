// Create web server
var http = require('http');
var fs = require('fs');

// Create a server
http.createServer(function (req, res) {
    // Read file
    fs.readFile('comments.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080); // Server listen on port 8080

// Print message in console
console.log('Server running at http://