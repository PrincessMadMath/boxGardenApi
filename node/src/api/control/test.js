var request = require('supertest');
var api = require('../../index.js');

describe('GET /control', function () {
    it('/values should respond with default value', function (done) {
        var app = api();

        request(app.listen())
            .get('/control/values')
            .expect({
                min_box_temperature: 20,
                max_box_temperature: 25
            })
            .end(done);
    })
});