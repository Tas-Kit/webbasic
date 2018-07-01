const express = require('express');
const next = require('next');
const { parse } = require('url');
const { join } = require('path');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  console.log('server created');

  server.set('port', process.env.PORT || 3000);
  const rootStaticFiles = ['/robots.txt', '/sitemap.xml', '/favicon.ico'];

  server.use((req, res, next) => {
    const parsedUrl = parse(req.url);
    const test = /\?[^]*\//.test(req.url);
    if (req.url.substr(-1) === '/' && req.url.length > 1 && !test)
      req.url = req.url.slice(0, -1);
    req.url = req.url.replace('/web/basic', '');

    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, 'static', parsedUrl.pathname);
      app.serveStatic(req, res, path);
    } else {
      next();
    }
  });

  server.get('/healthcheck', (req, res) => {
    res.status(200).send('HEALTHY');
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(server.get('port'), err => {
    if (err) throw err;
    console.log(`server started at port ${server.get('port')}`);
  });
});
