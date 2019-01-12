const ObjectId = require('mongoose').Types.ObjectId;
const {
  validationResult
} = require('express-validator/check');
const { routes } = require('./config');
const { User } = require('./users/models');
const { Article } = require('./articles/models');

function home(req, res) {
  Article.find((err, articles) => {
    if (err) console.log(err);
    res.render('index.html', {
      count: articles.length,
      user: req.user,
      articles
    });
  });
}

module.exports = {
  home
};
