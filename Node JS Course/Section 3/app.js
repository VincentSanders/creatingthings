const http = require('http'); //add ./http if you would search for local file 
const routes = require('./routes')

const server = http.createServer(routes);

server.listen(3000);