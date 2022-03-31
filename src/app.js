const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const app = new Hapi.Server({
    port: 3000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
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
