const express = require('express');
const mustachExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const { TEMPLATES_DIR, routes } = require('./config');
const { router } = require('./router');

function setupApp(passport) {
  const app = express();

  app.engine(
    'html',
    mustachExpress(TEMPLATES_DIR, '.html')
  );
  app.set('view engine', 'mustache');
  app.set('views', __dirname + '/views');

  app.use(express.static('static'));
  app.use(cookieParser());
  app.use(
    session({
      secret: 'keyborad cats',
      resave: false,
      saveUninitialized: true
    })
  );
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use(passport.session());

  app.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.anonymous = !req.user;
    res.locals.routes = routes;
    next();
  });

  app.use('/', router);
  mongoose.connect(
    'mongodb://localhost/try_node',
    { useNewUrlParser: true }
  );

  return app;
}

module.exports = { setupApp };
