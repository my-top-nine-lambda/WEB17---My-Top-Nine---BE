const request = require('supertest');
const server = require('../server.js')

// testing if it returns users
// (need to remove restricted from first request in users-router in order for test to work)

describe('movie model', () => {
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

    // LOGIN OK
    it('200 OK USERS', () => {
        return request(server)
            .get('/api/users/')
            .set('Authorization', token)
            .then((response) => {
                expect(response.statusCode).toBe(200)
            })
    })

    // LOGIN FAIL (missing token)
    it('401 USERS', () => {
        return request(server)
            .get('/api/users/')
            .expect(401)
    })
    
})
