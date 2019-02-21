const passport = require('passport');
module.exports = (app) => {
    app.get('/auth/facebook', passport.authenticate('facebook'));
    // app.get('/auth/facebook', passport.authenticate('facebook',  { scope: ['user_friends', 'manage_pages'] }));
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/home');
    });

    app.get('/api/logout', (req, res) => {
        console.log('logout23')
        req.logout();
        // res.send(req.user);
        // res.redirect('http://localhost:3000/home')
    });


    // app.get('/api/current_user', (req, res) => {
    //     res.send(req.user);
    // })
}
