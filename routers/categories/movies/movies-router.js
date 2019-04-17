const router = require('express').Router();

const Movies = require('./movies-model')
const MoviesDB = require('./moviesDB-model')
const restricted = require('../../../auth/restricted-middleware.js');


router.post('/movies', restricted, async (req, res) => { 
    try {
        const movieId = req.decodedJwt.subject
        const movie = req.body;
        const movies = await Movies.add(movie, movieId);
        res.status(200).json(movies);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "failed add list" })
    }
})

router.put('/movies', restricted, async (req, res) => {
    try{
        const movieId = req.decodedJwt.subject
        const movie = req.body;
        movies = await Movies.update(movie, movieId);
        res.status(200).json({ message: "list updated" });
    } catch (error) {
        res.status(500).json({ message: "failed to update" })
        console.log(error)
    }
})

router.get('/movies', restricted, async (req, res) => {
    try{
        const movieId = req.decodedJwt.subject;
        movies = await Movies.findIdMovies(movieId);
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({ message: "failed to get list" })
    }
})

router.post('/moviesDB', restricted, async (req, res) => {
    try{
        const movie = req.body
        const add = await MoviesDB.add(movie);
        res.status(200).json({ message: "movie added" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "failed to add" })
    }
})

router.get('/moviesDB', restricted, async (req, res) => {
    try{
        const allMovies = await MoviesDB.find()
        res.status(200).json(allMovies)
    } catch (error) {
        res.status(500).json({ message: "failed to get items"})
    }
})

router.get('/moviesDB/:id', restricted, async (req, res) => {
    try{
        const filmId = req.params.id;
        const match = await MoviesDB.findById(filmId);
        res.status(200).json(match)
    } catch (error) {
        res.status(500).json({ message: "failed to get item" })
    }
})

module.exports = router;