const {
  createArticleValidators,
  signupValidators
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
  signupHandler,
  signupPage
} = require('./controllers');

const router = Router();
router.get(routes.HOME, home);

router.get(routes.UPDATE_ARTICLE, updateArticlePage);
router.get(routes.CREATE_ARTICLE, createArticlePage);
router.get(routes.ARTICLE, articleDetail);
router.get(routes.signup, signupPage);

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

router.post(routes.signup, signupValidators, signupHandler);

module.exports = { router };
