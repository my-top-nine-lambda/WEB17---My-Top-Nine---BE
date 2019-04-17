const request = require('supertest');
const server = require('../server.js')

// testing if it returns users
// (need to remove restricted from first request in users-router in order for test to work)

// it('200 OK USERS', () => {
//     return request(server)
//         .get('/api/users/')
//         .expect(200)
// })

// testing unauthorized

it('401 USERS', () => {
    return request(server)
        .get('/api/users/')
        .expect(401)
})

