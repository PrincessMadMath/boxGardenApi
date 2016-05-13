// Connection to the mongodb

var monk = require('monk');
var db = monk('localhost');

exports.db = db;