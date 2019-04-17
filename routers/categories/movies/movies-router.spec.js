const request = require('supertest');
const server = require('../../../server.js')

describe('testing secure endpoints', () => {
    let token;

    beforeAll((done) => {
        request(server)
            .post('/api/auth/login')
            .send({
                username: "jest",
                password: "jest"
            })
            .end((err, response) => {
                token = response.body.token;
                done();
            })
    })

    // GET USER MOVIE LIST
    it('get movies 201', () => {
        return request(server)
            .get('/api/categories/movies')
            .set('Authorization', token)
            .then((response) => {
                expect(response.statusCode).toBe(200)
            })
    })

    // GET DB MOVIE LIST
    it('get DB movies 201', () => {
        return request(server)
            .get('/api/categories/moviesDB')
            .set('Authorization', token)
            .then((response) => {
                expect(response.statusCode).toBe(200)
            })
    })

    // GET MOVIES GET BY ID (1)
    it('get DB movie by ID 201', () => {
        return request(server)
            .get('/api/categories/moviesDB/1')
            .set('Authorization', token)
            .then((response) => {
                expect(response.statusCode).toBe(200)
                expect(response.type).toBe('application/json')
            })
    })


})
