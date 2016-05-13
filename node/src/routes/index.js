var router = require('koa-router');

var Index = new router();

Index.get('/', function *(){
    this.body = 'Welcome to Garden Box Api';
});

module.exports = Index;