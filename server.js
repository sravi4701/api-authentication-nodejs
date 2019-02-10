const http = require('http');

const app = require('./app');
const config = require('config');

// Normalize a port into string, number or false
function normalizePort(port) {
    const PORT = Number(port);
    if (isNaN(PORT)) {
        // names pipe
        return PORT;
    }
    if (PORT > 0) {
        return PORT;
    }
    return false;
}

const port = normalizePort(config.get('app.PORT'));
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.once('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string'?`Pipe ${address.port}`:`port ${address.port}`
    console.log(`Server is listening on ${bind}`);
});

server.on('error', () => {
    console.log(`Can not create a server`);
});
