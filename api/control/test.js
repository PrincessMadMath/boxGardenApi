var request = require('supertest');
var api = require('../../index.js');

describe('GET /stats', function () {
    it('should respond with stats', function (done) {
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