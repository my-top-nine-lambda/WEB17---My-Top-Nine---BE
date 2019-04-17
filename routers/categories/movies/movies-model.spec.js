const db = require('../../../data/dbConfig.js');
const Movies = require('./movies-model.js');
const request = require('supertest');
const server = require('../../../server.js');

// it('add movie', () => {
//     let movie = await Movies.add({ 
//         one: "spec test 1",
//         two: "spec test 2",
//         three: "spec test 3",
//         four: "spec test 4",
//         five: "spec test 5",
//         six: "spec test 6",
//         seven: "spec test 7",
//         eight: "spec test 8",
//         nine: "spec test 9"
//      }, INSERT TOKEN HERE);
//      expect(movie.one).toBe('spec test 1');
//      expect(movie.two).toBe('spec test 2');
//      expect(movie.three).toBe('spec test 3');
//      expect(movie.four).toBe('spec test 4');
//      expect(movie.five).toBe('spec test 5');
//      expect(movie.six).toBe('spec test 6');
//      expect(movie.seven).toBe('spec test 7');
//      expect(movie.eight).toBe('spec test 8');
//      expect(movie.nine).toBe('spec test 9');
// })

// it('add movie ok', async () => {
//     let movie = {
//         one: "spec test 1",
//         two: "spec test 2",
//         three: "spec test 3",
//         four: "spec test 4",
//         five: "spec test 5",
//         six: "spec test 6",
//         seven: "spec test 7",
//         eight: "spec test 8",
//         nine: "spec test 9"
//     }
//     let token = ???;

//     const res = await request(server).post('/api/categories/movies').send(movie, token)
//     expect(res.statusCode).toBe(200)
// })