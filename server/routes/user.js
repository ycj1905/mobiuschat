const mongoose = require('mongoose');
const User = mongoose.model('users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (app) => {
    app.post('/api/user/register', async (req, res) => {
        const existingUser = await User.findOne({ facebookId: req.body.facebookId });

        if (existingUser) {
            res.send({message: 'user has created !'});
            return ;
        }
        const hashedPswd = bcrypt.hashSync(req.body.pswd, saltRounds);
        const user = await new User({
            name: req.body.name,
            pswd: hashedPswd,
            gender: req.body.gender,
            email: req.body.email,
            city: req.body.city,
        }).save();
        res.send(user);
    })

    app.post('/api/user/login', async (req, res) => {
        const foundUser = await User.findOne({ facebookId: req.body.facebookId });
        bcrypt.compare(req.body.pswd, foundUser.pswd).then((res) => {
            console.log('res'); // true
            console.log(res); // true
        });
    })
}