const router = require('express').Router();

const Users = require('./users-model.js');
const Movies = require('./movies-model.js')
const MoviesDB = require('./moviesDB-model.js')
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);    
    } catch (error) {
        res.status(500).json({ message: 'error getting users' })
    }
})

router.get('/greet', restricted, async (req, res) => {
    try {
        const current = req.decodedJwt.subject
        res.status(200).json({ message: `hello user ${current}`})
    } catch (error) {
        res.status(500).json({error})
    }
})

router.post('/movies', restricted, async (req, res) => { 
    try {
        const movieId = req.decodedJwt.subject
        console.log(movieId)
        if(Movies.findIdMovies(movieId) === movieId) {
            res.status(409).json({ message: "List already exists, please use the update functionality." })
        } else {
            const movie = req.body;
            const movies = await Movies.add(movie, movieId);
            res.status(200).json(movies);
        }
    } catch (error) {
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
        movie = req.body
        add = await MoviesDB.add(movie);
        res.status(200).json({ message: "movie added" });
    } catch (error) {
        res.status(500).json({ message: "failed to add" })
        console.log(error)
    }
})

router.get('/moviesDB', restricted, (req, res) => {
    try{
        const allMovies = MoviesDB.find()
        res.status(200).json(allMovies)
    } catch (error) {
        res.status(500).json({ message: "failed to get items"})
        console.log(error)
    }
})

module.exports = router;