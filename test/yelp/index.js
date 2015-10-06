var request = require('supertest');
var assert = require("assert");

describe('loading express', function () {
    "use strict";
    var server;
    beforeEach(function () {
        server = require('../../app.js').listen(3000);
    });
    afterEach(function () {
        server.close();
    });
    it('responds to a query', function testSlash(done) {
        request(server)
            .get('/yelp/search?location=SF')
            .expect(200, done);
    });
    it('should have the right data', function (done) {
        request(server)
            .get('/yelp/search?location=SF')
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
                assert.equal(res.body.error, null);
                done();
            });
    });
});
