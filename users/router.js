const { Router } = require('express');
const usersControllers = require('./controllers');
const passport = require('../passport');
const { signupValidators } = require('../validators');

const router = Router();

router.get('/signup', usersControllers.signupPage);
router.get('/signin', usersControllers.signinPage);
router.post(
  '/signin',
  signupValidators,
  passport.authenticate('local', {
    failureMessage: 'Invalid credentials'
  }),
  usersControllers.signinHandler
);
router.post(
  '/signup',
  signupValidators,
  usersControllers.signupHandler
);

router.get('/logout', usersControllers.logoutHandler);

module.exports = router;
