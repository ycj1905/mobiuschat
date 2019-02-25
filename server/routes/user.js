const mongoose = require('mongoose');
const User = mongoose.model('users');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secret = 'my_secret_key';

module.exports = (app) => {
    app.post('/api/user/register', async (req, res) => {
        // const existingUser = await User.findOne({ facebookId: req.body.facebookId });
        const existingUser = await User.findOne({'accounts.kind': 'local', 'accounts.username': req.body.username });

        console.log('existingUser');
        console.log(existingUser);
        if (existingUser) {
            res.send({message: 'user has created !'});
            return ;
        }
        const hashedPswd = bcrypt.hashSync(req.body.pswd, saltRounds);
        
        const user = await new User({
            name: '',
            email: '',
            gender: '',
            city: '',
            accounts: {
                kind: 'local',
                username: req.body.username,
                password: hashedPswd
            }
        }).save();
        res.send(user);
    })

    app.post('/api/user/login', async (req, res) => {
        const foundUser = await User.findOne({ facebookId: req.body.facebookId });
        const reuslt  = await bcrypt.compare(req.body.pswd, foundUser.pswd);
        if(reuslt) {
            const payload = {
                user_name: foundUser.name,
                user_email: foundUser.email
            };
            const token = await jwt.sign({
                payload,
                exp: Math.floor(Date.now() / 1000) + (60 * 15)},
                secret);
            console.log('token');
            res.send({
                token,
                message: 'You got the token'
            })
        }else {
            res.sendStatus(403);
            // res.send({message: ''})
        }
    })

    function ensureToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            console.log('bearerToken')
            console.log(bearerToken)
            req.token = bearerToken;
            next();
        } else {
            res.sendStatus(403);
        }
    }

    app.get('/api/protected', ensureToken, (req, res) => {
        console.log('req.token2')
        console.log(req.token)
        jwt.verify(req.token, secret, (err, data) => {
            if(err) {
                res.sendStatus(403)
            } else {
                res.json({
                    text: 'this is protected',
                    data: data
                })
            }
        })
    })
    app.post('/api/test/login', (req, res) => {
        const user = {id: 3};
        const token = jwt.sign({user}, secret);
        res.json({
            token
        })
    })
}