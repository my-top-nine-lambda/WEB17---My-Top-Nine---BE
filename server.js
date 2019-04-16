const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router.js');
const userRouter = require('./users/users-router.js');
const movieRouter = require('./routers/categories/movies/movies-router.js');

const server = express();
server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/categories', movieRouter);

server.get('/', (req, res) => {
    res.send('Beep Boop, server alive.')
})

module.exports = server;