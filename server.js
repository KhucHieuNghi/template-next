// import express from 'express';
// import url from 'url';
// import next from 'next';
const express = require('express');
const url = require('url');
const next = require('next');
// import routes from './router';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

// routes(server);

app.prepare().then(() => {
    server.use((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/a') {
      app.render(req, res, '/a', query);
    } else {
      handle(req, res, parsedUrl);
    }
  });

  server.listen(8080, () => {
    console.log('> Ready on http://localhost:8080');
  });
});
