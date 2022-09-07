var http = require('http'); // Import Node.js core module
var startTime = new Date().getTime();
const minute = 1000 * 60;
var server = http.createServer(function (req, res) {   //create web server
    
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>Home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/ping") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('pong');
        res.end();
    
    }
    else if (req.url == "/status") {
        
        var endTime = new Date().getTime();
        var status = endTime - startTime;
        res.end(JSON.stringify({ Status: Math.round(status / minute) }, null, 3));
        //res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(3000); //6 - listen for any incoming requests

console.log('Node.js web server at port 3000 is running..')