const
    responseTime = require('koa-response-time'),
    logger = require('koa-logger'),
    router = require('koa-router'),
    controlHandler = require('./api/controlValues/index.js'),
    mount = require('koa-mount'),
    koa = require('koa');

module.exports = api;

function api() {
    var app = koa();

    // logging
    app.use(logger());

    // x-response-time
    app.use(responseTime());

    var Control = new router();
    Control.get('/values', controlHandler.values);

    app.use(mount('/control', Control.middleware()));

    return app;
}

var app = api();

app.listen(3000);
console.log('Listening on %s', 3000);