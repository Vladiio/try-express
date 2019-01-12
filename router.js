const { signupValidators } = require('./validators');
const { Router } = require('express');
const { routes } = require('./config');
const passport = require('./passport');
const { home } = require('./controllers');
const articlesRouter = require('./articles/router');
const usersRouter = require('./users/router');

const router = Router();

router.get(routes.HOME, home);
router.use('/articles', articlesRouter);
router.use('/users', usersRouter);

module.exports = { router };
