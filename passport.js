const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const { User } = require('./models');

function setupPassport() {
  passport.use(
    new LocalStrategy(async function(
      username,
      password,
      done
    ) {
      const user = await User.findOne({ username });
      const isValid = user.verifyPassword(password);

      return done(null, isValid ? user : false);
    })
  );

  passport.serializeUser((user, done) =>
    done(null, user.id)
  );
  passport.deserializeUser((id, done) =>
    User.findById(id, (err, user) => done(err, user))
  );

  return passport;
}

const configuredPassport = setupPassport();

module.exports = configuredPassport;
