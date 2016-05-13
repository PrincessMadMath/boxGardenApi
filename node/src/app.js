const
    responseTime = require('koa-response-time'),
    logger = require('koa-logger'),
    mount = require('koa-mount'),
    dbConnection = require('./db/db.js')
    koa = require('koa');

var indexRoutes = require('./routes/index.js')
var controlRoutes = require('./routes/controls.js')

module.exports = api;

function api() {
    var app = koa();

    // Log error
    app.use(function *(next) {
        try {
            yield next;
        } catch (err) {
            console.log('An error occured');
            this.status = err.status || 500;
            this.body = err.message;
            this.app.emit('error', err, this);
        }
    });


    // logging
    app.use(logger());

    // x-response-time
    app.use(responseTime());

    // Make our db accessible to our router
    app.use(function *(next){
        this.request.db = dbConnection.db;
        yield next;
    });

    // Mount the route to the right sub-path
    app.use(mount('/', indexRoutes.middleware()));
    app.use(mount('/control', controlRoutes.middleware()));

    app.use(function *(){
        var err = new Error('Target endpoint not found');
        err.status = 404;
        throw err;
    });

    return app;
}

var app = api();

app.listen(3000);
console.log('Listening on %s', 3000);
