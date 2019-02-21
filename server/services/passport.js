

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const FacebookToken = require('../secret/facebookToken');

passport.use(new FacebookStrategy({
    clientID: FacebookToken.clientID,
    clientSecret: FacebookToken.clientSecret,
    // callbackURL: "http://localhost:3000/auth/facebook/callback"
    callbackURL: FacebookToken.callbackURL
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    console.log(accessToken);
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

