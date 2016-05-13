var router = require('koa-router');
var koaBody = require('koa-body')()
var controlHandler = require('../api/control/control.js');

var Control = new router();

Control.get('/values', controlHandler.values);
Control.post('/values', koaBody, controlHandler.insert);

module.exports = Control;