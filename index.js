const {
  check,
  validationResult
} = require('express-validator/check');
const setupApp = require('./setupApp');
const {
  home,
  createArticleHandler,
  createArticlePage,
  updateArticlePage,
  articleDetail,
  updateArticleHandler,
  signinHandler,
  signinPage
} = require('./controllers');
const {
  createArticleValidators,
  signinValidators
} = require('./validators');
const { Article } = require('./models');
const { APP_PORT, routes } = require('./config');

const app = setupApp();

app.get(routes.HOME, home);

app.get(routes.UPDATE_ARTICLE, updateArticlePage);
app.get(routes.CREATE_ARTICLE, createArticlePage);
app.get(routes.ARTICLE, articleDetail);
app.get(routes.SIGNIN, signinPage);

app.post(
  routes.CREATE_ARTICLE,
  createArticleValidators,
  createArticleHandler
);
app.post(
  routes.UPDATE_ARTICLE,
  createArticleValidators,
  updateArticleHandler
);

app.post(routes.SIGNIN, signinValidators, signinHandler);

app.listen(APP_PORT);
