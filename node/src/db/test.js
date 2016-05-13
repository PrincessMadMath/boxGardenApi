// Test to see how we can use Monk

var should = require('should');
var monk = require('monk');

describe('Adding documents', function(){

    var db, orders = {};

    // Before each test we create a connection to the db
    beforeEach(function(done){
        db = monk('localhost');
        cats = db.get('cats');
        done();
    });

    after(function(done){
        monk('localhost/testingMonk')
            .get('cats')
            .drop(function(err){
                if(err) return done(err);
            });
        done();
    });

    it('Do adding a document', function(done){
        cats.insert({name: 'Rex'}, function(err, doc){
            if(err) return done(err);
            should.exist(doc);
            done();
        });
    });

});