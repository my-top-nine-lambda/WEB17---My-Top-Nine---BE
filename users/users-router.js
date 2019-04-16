const router = require('express').Router();

const Users = require('./users-model.js');
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

module.exports = router;