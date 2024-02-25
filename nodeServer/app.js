//create server with node js 
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    console.log('Hello')
});

server.listen(3000);
