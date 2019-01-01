const TEMPLATES_DIR = __dirname + '/views';

const APP_PORT = 3000;

const routes = {
  HOME: '/',
  ARTICLE: '/article/:id/',
  CREATE_ARTICLE: '/article/create',
  UPDATE_ARTICLE: '/article/:id/update',
  signup: '/users/signup'
};

module.exports = {
  TEMPLATES_DIR,
  APP_PORT,
  routes
};
