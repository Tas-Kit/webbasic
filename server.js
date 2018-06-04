const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.set('port', process.env.PORT || 3000);

  server.use((req, res, next) => {
    const test = /\?[^]*\//.test(req.url);
    if (req.url.substr(-1) === '/' && req.url.length > 1 && !test)
      req.url = req.url.slice(0, -1);
    next();
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(server.get('port'), err => {
    if (err) throw err;
    console.log(`server started at port ${server.get('port')}`);
  });
});
