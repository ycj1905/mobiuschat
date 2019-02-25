

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const FacebookToken = require('../secret/facebookToken');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new FacebookStrategy({
    clientID: FacebookToken.clientID,
    clientSecret: FacebookToken.clientSecret,
    callbackURL: FacebookToken.callbackURL,
    profileFields: ['id', 'emails', 'name']
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({'accounts.kind': 'facebook', 'accounts.facebookId': profile.id});
    if (existingUser) {
      return done(null, existingUser);
    }

    const user = await new User({
      name: '',
      email: profile.emails[0].value,
      gender: '',
      city: '',
      accounts: {
        kind: 'facebook',
        facebookId: profile.id
      }
    }).save();

    done(null, user);
  }
));