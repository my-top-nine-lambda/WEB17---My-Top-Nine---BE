const request = require('supertest');
const usersRouter = require('./users-router.js');
const server = require('../server.js')

// describe('user-router.js', () => {
//     it('200 OK', () => {
//         return request(usersRouter)
//             .get('/')
//             .expect(200)
//     })
// })

it('200 OK', () => {
    return request(server)
        .get('/api/users/')
        .expect(200)
})