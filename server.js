const http = require('node:http');

http.createServer((request, response) => { 
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.writeHead(
        200,
        {'content-type': 'application/json'}
    );
    response.end(JSON.stringify({
    name: 'Joyce',
    email: 'joyce@email.com'
 }));
}).listen(3000);
