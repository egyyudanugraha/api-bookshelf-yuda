const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const app = new Hapi.Server({
    port: process.env.PORT || 5000,
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
