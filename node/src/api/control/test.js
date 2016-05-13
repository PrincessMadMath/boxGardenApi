var request = require('supertest');
var should = require('should');
var monk = require('monk');

var api = require('../../app.js');

describe('GET /control', function () {

    var db, values = {};

    // Before each test we create a connection to the db
    beforeEach(function(done){
        db = monk('localhost');
        values = db.get('controlValues');
        done();
    });

    afterEach(function(done){
        monk('localhost/testingMonk')
            .get('controlValues')
            .drop(function(err){
                if(err) return done(err);
            });
        done();
    });

    it('get /control/values should return the latest value', function (done) {
        basicControlValue = {
            min_box_temperature: 20,
            max_box_temperature: 25
        };

        values.insert(basicControlValue);

        var app = api();

        request(app.listen())
            .get('/control/values')
            .expect(basicControlValue)
            .end(done);
    });

    it('post /control/values should put objet in the database')
    {
        var app = api();

        post()

    }
});