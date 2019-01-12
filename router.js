const {
  createArticleValidators,
  signupValidators
} = require('./validators');
const { Router } = require('express');
const { routes } = require('./config');
const passport = require('./passport');
const {
  home,
  createArticleHandler,
  createArticlePage,
  updateArticlePage,
  articleDetail,
  updateArticleHandler,
  signupHandler,
  signupPage,
  signinPage,
  signinHandler,
  logoutHandler
} = require('./controllers');

const router = Router();

router.get(routes.HOME, home);
router.get(routes.UPDATE_ARTICLE, updateArticlePage);
router.get(routes.CREATE_ARTICLE, createArticlePage);
router.get(routes.ARTICLE, articleDetail);
router.get(routes.SIGNUP, signupPage);
router.get(routes.SIGNIN, signinPage);
router.get(routes.LOGOUT, logoutHandler);

router.post(routes.SIGNUP, signupValidators, signupHandler);
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
router.post(
  routes.SIGNIN,
  signupValidators,
  passport.authenticate('local', {
    failureRedirect: '/'
  }),
  signinHandler
);

module.exports = { router };
