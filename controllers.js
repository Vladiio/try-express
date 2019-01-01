const ObjectId = require('mongoose').Types.ObjectId;
const {
  validationResult
} = require('express-validator/check');
const { routes } = require('./config');
const { Article, User } = require('./models');

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
    return res.render('create_update_article.html', {
      errors: errors.array()
    });
  }
  const { title, text } = req.body;
  const { _id } = await Article.create({ title, text });
  res.redirect('/article/' + _id);
}

function createArticlePage(req, res) {
  return res.render('create_update_article.html', {
    pageTitle: 'Create an article',
    formActionUrl: routes.CREATE_ARTICLE
  });
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

async function updateArticlePage(req, res) {
  const { id } = req.params;

  const formActionUrl = routes.UPDATE_ARTICLE.replace(
    ':id',
    id
  );
  const pageTitle = 'Update the article';
  const article = await Article.findById(id);

  return res.render('create_update_article.html', {
    pageTitle,
    formActionUrl,
    article
  });
}

async function updateArticleHandler(req, res) {
  const errors = validationResult(req);
  const { id } = req.params;
  if (!errors.isEmpty()) {
    return res.redirect(
      routes.UPDATE_ARTICLE.replace(':id', id)
    );
  }
  const { title, text } = req.body;
  await Article.updateOne({ _id: id }, { title, text });
  return res.redirect(routes.ARTICLE.replace(':id', id));
}

function signupPage(req, res) {
  res.render('signup.html');
}

async function signupHandler(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('signup.html', {
      errors: errors.array()
    });
  }
  const { username, password } = req.body;
  const user = await User.create({ username, password });
  return res.redirect('/');
}

module.exports = {
  home,
  createArticlePage,
  createArticleHandler,
  articleDetail,
  updateArticlePage,
  updateArticleHandler,
  signupPage,
  signupHandler
};
