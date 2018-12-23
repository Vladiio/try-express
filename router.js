const {
  createArticleValidators,
  signinValidators
} = require('./validators');
const { Router } = require('express');
const { routes } = require('./config');
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

const router = Router();
router.get(routes.HOME, home);

router.get(routes.UPDATE_ARTICLE, updateArticlePage);
router.get(routes.CREATE_ARTICLE, createArticlePage);
router.get(routes.ARTICLE, articleDetail);
router.get(routes.SIGNIN, signinPage);

router.post(
  routes.CREATE_ARTICLE,
  createArticleValidators,
  createArticleHandler
);
router.post(
  routes.UPDATE_ARTICLE,
  createArticleValidators,
  updateArticleHandler
);

router.post(routes.SIGNIN, signinValidators, signinHandler);

module.exports = { router };
