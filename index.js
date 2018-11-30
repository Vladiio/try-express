const express = require('express');
const mustachExpress = require('mustache-express');
const { Article } = require('./db');

const app = express();

app.engine('html', mustachExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('static'));

app.get('/', function(req, res) {
  Article.find((err, articles) => {
    if (err) console.log(err);
    res.render('index.html', {
      count: articles.length,
      articles
    });
  });
});

app.listen(3000);
