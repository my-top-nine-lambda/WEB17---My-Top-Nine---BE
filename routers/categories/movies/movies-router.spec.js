const request = require('supertest');
const server = require('../../../server.js')

it('post movies', () => {
    return request(server)
        .get('/api/categories/movies')
        .expect(200)
})