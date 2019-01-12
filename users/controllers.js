const { User } = require('./models');
const { routes } = require('../config');
const {
  validationResult
} = require('express-validator/check');

function signupPage(req, res) {
  res.render('auth.html', {
    form_action: routes.SIGNUP,
    title: 'Sign up'
  });
}

async function signupHandler(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('auth.html', {
      errors: errors.array(),
      form_action: routes.SIGNUP,
      title: 'Sign up'
    });
  }
  const { username, password } = req.body;
  const user = await User.create({ username, password });
  return res.redirect('/');
}

function signinPage(req, res) {
  res.render('auth.html', {
    form_action: routes.SIGNIN,
    title: 'Sign in'
  });
}

function signinHandler(req, res) {
  res.redirect(routes.HOME);
}

function logoutHandler(req, res) {
  req.logout();
  res.redirect(routes.HOME);
}

module.exports = {
  signinHandler,
  signupHandler,
  signupPage,
  signinPage,
  logoutHandler
};
