const db = require('../../../data/dbConfig.js');
const Movies = require('./movies-model.js');
const request = require('supertest');
const server = require('../../../server.js');

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

    // USER MAKE MOVIE LIST OK
    it('add movie', () => {
        let movie = { 
            one: "spec test 1",
            two: "spec test 2",
            three: "spec test 3",
            four: "spec test 4",
            five: "spec test 5",
            six: "spec test 6",
            seven: "spec test 7",
            eight: "spec test 8",
            nine: "spec test 9"
         };

         return request(server)
            .post('/api/categories/movies')
            .set('Authorization', token)
            .send(movie)
            .then((response) => {
                expect(response.statusCode).toBe(200)
            })
    })

    // USER PUT MOVIE LIST OK
    it('put movie', () => {
        let movie = { 
            one: "spec 1",
            two: "spec 2",
            three: "spec 3",
            four: "spec 4",
            five: "spec 5",
            six: "spec 6",
            seven: "spec 7",
            eight: "spec 8",
            nine: "spec 9"
         };

         return request(server)
            .put('/api/categories/movies')
            .set('Authorization', token)
            .send(movie)
            .then((response) => {
                expect(response.statusCode).toBe(200)
            })
    })

    // USER POST DB MOVIE OK
    // Need to change movie name to something unique
    it('add DB movie', () => {
        let movie = { 
            name: "spectestmovie2"
         };

         return request(server)
            .post('/api/categories/moviesDB')
            .set('Authorization', token)
            .send(movie)
            .then((response) => {
                expect(response.statusCode).toBe(200)
            })
    })
})