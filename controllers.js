const ObjectId = require('mongoose').Types.ObjectId;
const {
  validationResult
} = require('express-validator/check');
const { Article } = require('./models');

function home(req, res) {
  Article.find((err, articles) => {
    if (err) console.log(err);
    res.render('index.html', {
      count: articles.length,
      articles
    });
  });
}

async function createArticleHandler(req, res) {
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

function createArticlePage(req, res) {
  return res.render('create_article.html');
}

async function articleDetail(req, res, next) {
  const { id } = req.params;
  const article = await Article.findById(id);
  if (!article) {
    return res.status(404).send('not found');
  }
  return res.render('article.html', {
    article
  });
}

module.exports = {
  home,
  createArticlePage,
  createArticleHandler,
  articleDetail
};
