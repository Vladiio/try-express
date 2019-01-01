const express = require('express');
const mustachExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { TEMPLATES_DIR } = require('./config');
const { router } = require('./router');
const { User } = require('./models');

function setupPassort() {
  passport.use(
    new LocalStrategy(async function(
      username,
      password,
      done
    ) {
      let user = await User.findOne({ username });
      if (!user.verifyPassword(passport)) {
        user = false;
      }
      return done(null, user);
    })
  );
  return passport;
}

function setupApp() {
  const app = express();

  app.engine(
    'html',
    mustachExpress(TEMPLATES_DIR, '.html')
  );
  app.set('view engine', 'mustache');
  app.set('views', __dirname + '/views');

  app.use(express.static('static'));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/', router);

  mongoose.connect(
    'mongodb://localhost/try_node',
    { useNewUrlParser: true }
  );

  return app;
}

module.exports = setupApp;
