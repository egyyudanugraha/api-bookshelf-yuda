const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const app = new Hapi.Server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  app.route(routes);

  await app.start();
  console.log(`Server running on ${app.info.uri}`);
};

init();
