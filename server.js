const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const HapiCors = require("hapi-cors");

const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: '0.0.0.0'
    });
    server.route(routes);

    await server.register({
        plugin: HapiCors,
        options: {
            origins: ['*'],
            methods: ['GET', 'POST', 'PUT', 'DELETE']
        },
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();
