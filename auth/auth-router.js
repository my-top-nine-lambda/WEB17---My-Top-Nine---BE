const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const secret = require("../auth/secret.js")
const Users = require('../users/users-model.js');

router.post('/register', async (req, res) => {
    try {
        const user = req.body;
        const hash = bcrypt.hashSync(user.password, 4);
        user.password = hash;
        const saved = await Users.add(user);
        res.status(201).json(saved)
    } catch (error) {
        res.status(500).json({ message: "Error Registering" })
    }
})

router.post('/login', async (req, res) => {
    try {
        let { username, password } = req.body;
        const user = await Users.findBy({ username }).first()
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({ 
                message: `Welcome ${user.username}!`,
                token,
         });
        } else {
            res.status(401).json({ message: 'Invalid Credentials' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error Logging In' })
    }
})

generateToken = user => {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;