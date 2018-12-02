const express = require('express');
const mustachExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { TEMPLATES_DIR } = require('./config');

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

  mongoose.connect(
    'mongodb://localhost/try_node',
    { useNewUrlParser: true }
  );

  return app;
}

module.exports = setupApp;
