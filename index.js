const express = require('express');
const mustachExpress = require('mustache-express');
const bodyParser = require('body-parser');
const {
  check,
  validationResult
} = require('express-validator/check');

const { Article } = require('./db');

const app = express();

app.engine('html', mustachExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  Article.find((err, articles) => {
    if (err) console.log(err);
    res.render('index.html', {
      count: articles.length,
      articles
    });
  });
});

app.post(
  '/create',
  [
    check('title')
      .isLength({ min: 5 })
      .withMessage('The value is too short'),
    check('text')
      .isLength({ min: 5 })
      .withMessage('The value is too short')
  ],
  async function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('index.html', {
        errors: errors.array()
      });
    }
    const { title, text } = req.body;
    await Article.create({ title, text });
    res.redirect('/');
  }
);

app.listen(3000);
