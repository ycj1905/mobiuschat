

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
    // callbackURL: "http://localhost:3000/auth/facebook/callback"
    callbackURL: FacebookToken.callbackURL
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log('profile');
    console.log(profile);
    // console.log(accessToken);

    const existingUser = await User.findOne({ facebookId: profile.id });
    console.log('existingUser');
    console.log(existingUser)
    if (existingUser) {
      return done(null, existingUser);
    }
    const user = await new User({
      facebookId: profile.id
    }).save();

    done(null, user);
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

// app.get('/test', async (req, res) => {
//   const user = new User({
//       facebookId: 'matt'
//   })
  
//   try {
//       await user.save();
//   } catch(err) {
//       res.status(422).send(err);
//   }
// })
