'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 1025
});

server.register(require('inert'), (err) => {
    if (err) throw new Error(err);

    // Add the route
    server.route({
        method: 'GET',
        path:'/{param*}',
        handler: {
            directory : {
                path : './app/',
                index : true,
                redirectToSlash : true
            }
        }
    });

});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});