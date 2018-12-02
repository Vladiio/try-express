const TEMPLATES_DIR = __dirname + '/views';

const APP_PORT = 3000;

const routes = {
  HOME: '/',
  CREATE_ARTICLE: '/create',
  ARTICLE: '/article/:id/'
};

module.exports = {
  TEMPLATES_DIR,
  APP_PORT,
  routes
};
