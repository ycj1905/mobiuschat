const passport = require('passport');
module.exports = (app) => {
    app.get('/auth/facebook', passport.authenticate('facebook'));
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/home');
    });

    // app.get('/api/logout', (req, res) => {
    //     req.logout();
    //     // res.send(req.user);
    //     res.redirect('/')
    // });


    // app.get('/api/current_user', (req, res) => {
    //     res.send(req.user);
    // })
}
