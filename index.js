const {
  check,
  validationResult
} = require('express-validator/check');
const setupApp = require('./setupApp');
const {
  home,
  createArticleHandler,
  createArticlePage,
  articleDetail
} = require('./controllers');
const { createArticleValidators } = require('./validators');
const { Article } = require('./models');
const { APP_PORT, routes } = require('./config');

const app = setupApp();

app.get(routes.HOME, home);
app.get(routes.ARTICLE, articleDetail);

app.get(routes.CREATE_ARTICLE, createArticlePage);
app.post(
  routes.CREATE_ARTICLE,
  createArticleValidators,
  createArticleHandler
);

app.listen(APP_PORT);
