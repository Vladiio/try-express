const TEMPLATES_DIR = __dirname + '/views';

const APP_PORT = 3000;

const routes = {
  HOME: '/',
  ARTICLE: '/articles/:id/',
  CREATE_ARTICLE: '/articles/create',
  UPDATE_ARTICLE: '/articles/:id/update',
  SIGNUP: '/users/signup',
  SIGNIN: '/users/signin',
  LOGOUT: '/users/logout'
};

module.exports = {
  TEMPLATES_DIR,
  APP_PORT,
  routes
};
