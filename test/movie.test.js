const supertest = require('supertest');

describe('Test movies service', function() {
    var server;

    beforeEach(function() {
        server = require('../server');
    });

    afterEach(function() {
        server.close();
    });

    it('responds to basic GET request.', function(done) {
        supertest(server)
            .get('/movies')
            .expect(200, done);
    });

    it('returns the full list of movies', function(done) {
        supertest(server)
            .get('/movies')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect([{
                id: 1,
                name: 'Forrest Gump'
            }, {
                id: 2,
                name: 'The Green Mile'
            }], done);
    });
});