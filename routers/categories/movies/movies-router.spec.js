const request = require('supertest');
const server = require('../../../server.js')

it('post movies 201', () => {
    return request(server)
        .get('/api/categories/movies')
        .expect(401)
        // change to 201 after restriction
})
