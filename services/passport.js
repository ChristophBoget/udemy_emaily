const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  (accessToken, refreshToken, profile, done) => {
    const googleId = profile._json.sub;

    User.findOne({id: googleId}).then((existingUser) => {
      if (existingUser) {
        done(null, existingUser);
      } else {
        const oUser = new User({
          _id: googleId,
          id: googleId,
          fullName: profile._json.name,
          firstName: profile._json.given_name,
          lastName: profile._json.family_name,
          picture: profile._json.picture,
          email: profile._json.email,
          emailVerified: profile._json.email_verified,
          locale: profile._json.locale
        });

        oUser.save().then((user) => {
          done(null, user);}
        );
      }
    }).catch(a => {
      console.log('caught error: ', a);
    });
  })
);
