var http = require('http');

http.createServer(function (req, res) 
{
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('한글이 과연 될까?\n');
}).listen(8000, '127.0.0.1');

console.log('Server running at http//127.0.0.1:8000/');