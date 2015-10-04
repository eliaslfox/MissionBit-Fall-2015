var request = require('supertest');

describe('loading express', function () {
    "use strict";
    var server;
    beforeEach(function () {
        server = require('../../index.js').listen(3000);
    });
    afterEach(function () {
        server.close();
    });
    it('responds to a query', function testSlash(done) {
        request(server)
            .get('/yelp/search')
            .expect(200, done);
    });
});
