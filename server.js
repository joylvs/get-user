const http = require('node:http');

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    if (request.url === '/users') {
        response.writeHead(
            200,
            { 'content-type': 'application/json' }
        );
        response.end(JSON.stringify([
            {
                name: 'Joyce',
                email: 'joyce@email.com'
            }, {
                name: 'Elvis',
                email: 'elvis@gmail.com'
            }, {
                name: 'Rita',
                email: 'rita@gmail.com'
            }
        ]));

        return
    }


    if (request.url === '/products') {

        response.writeHead(
            200,
            { 'content-type': 'application/json' }
        );
        response.end(JSON.stringify([
            {
                product: 'phone',
                price: 500
            },
            {
                product: 'laptop',
                price: 800
            },
            {
                product: 'smartwatch',
                price: 100
            }
        ]));
        return

    }


    response.writeHead(404);

    response.end(JSON.stringify({
        message: 'Não existente.'
    }));

}).listen(3000);
