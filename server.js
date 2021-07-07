const express = require('express');
const next = require('next');
const useragent = require('express-useragent');
const middlewareResponse = require('./middleware/response');
// import routes from './router';

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

// routes(server);

server.use('/health', (_, res) => res.status(200).send('ping'));

app.prepare().then(() => {
    server.use((req, res, cb) => {
        req.ua = req.headers['user-agent'] ? useragent.parse(req.headers['user-agent']) : { isMobile: true };
        cb();
    });

    server.use(middlewareResponse);

    server.use((req, res, cb) => {
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, lang',
        );
        cb();
    });

    server.use(handle);

    server.listen(port, () => console.log(`> Ready on http://localhost:${port}`));
});

// setInterval(() => {
//     try {
//         global.gc();
//     } catch (e) {
//         console.log("You must run program with 'node --expose-gc server.js' or 'npm start'");
//         process.exit();
//     }
// }, 5000);
