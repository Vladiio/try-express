[1mdiff --git a/index.js b/index.js[m
[1mindex 79c76dd..ab939f4 100644[m
[1m--- a/index.js[m
[1m+++ b/index.js[m
[36m@@ -1,45 +1,7 @@[m
[31m-const {[m
[31m-  check,[m
[31m-  validationResult[m
[31m-} = require('express-validator/check');[m
 const setupApp = require('./setupApp');[m
[31m-const {[m
[31m-  home,[m
[31m-  createArticleHandler,[m
[31m-  createArticlePage,[m
[31m-  updateArticlePage,[m
[31m-  articleDetail,[m
[31m-  updateArticleHandler,[m
[31m-  signinHandler,[m
[31m-  signinPage[m
[31m-} = require('./controllers');[m
[31m-const {[m
[31m-  createArticleValidators,[m
[31m-  signinValidators[m
[31m-} = require('./validators');[m
[31m-const { Article } = require('./models');[m
[32m+[m
 const { APP_PORT, routes } = require('./config');[m
 [m
 const app = setupApp();[m
 [m
[31m-app.get(routes.HOME, home);[m
[31m-[m
[31m-app.get(routes.UPDATE_ARTICLE, updateArticlePage);[m
[31m-app.get(routes.CREATE_ARTICLE, createArticlePage);[m
[31m-app.get(routes.ARTICLE, articleDetail);[m
[31m-app.get(routes.SIGNIN, signinPage);[m
[31m-[m
[31m-app.post([m
[31m-  routes.CREATE_ARTICLE,[m
[31m-  createArticleValidators,[m
[31m-  createArticleHandler[m
[31m-);[m
[31m-app.post([m
[31m-  routes.UPDATE_ARTICLE,[m
[31m-  createArticleValidators,[m
[31m-  updateArticleHandler[m
[31m-);[m
[31m-[m
[31m-app.post(routes.SIGNIN, signinValidators, signinHandler);[m
[31m-[m
 app.listen(APP_PORT);[m
[1mdiff --git a/setupApp.js b/setupApp.js[m
[1mindex 3891362..540e110 100644[m
[1m--- a/setupApp.js[m
[1m+++ b/setupApp.js[m
[36m@@ -3,6 +3,7 @@[m [mconst mustachExpress = require('mustache-express');[m
 const bodyParser = require('body-parser');[m
 const mongoose = require('mongoose');[m
 const { TEMPLATES_DIR } = require('./config');[m
[32m+[m[32mconst { router } = require('./router');[m
 [m
 function setupApp() {[m
   const app = express();[m
[36m@@ -19,6 +20,8 @@[m [mfunction setupApp() {[m
   app.use(bodyParser.urlencoded({ extended: true }));[m
   app.use(bodyParser.json());[m
 [m
[32m+[m[32m  app.use('/', router);[m
[32m+[m
   mongoose.connect([m
     'mongodb://localhost/try_node',[m
     { useNewUrlParser: true }[m
[1mdiff --git a/views/signin.html b/views/signin.html[m
[1mindex eed4117..70656d9 100644[m
[1m--- a/views/signin.html[m
[1m+++ b/views/signin.html[m
[36m@@ -2,6 +2,7 @@[m
 [m
 <div class="w-50 m-auto text-center">[m
   <form action="/users/signin" method="post" class="mt-5">[m
[32m+[m[32m    <h4>Sign in</h4>[m
     {{# errors }}[m
     <p>{{ param }}: {{ msg }}</p>[m
     {{/ errors}}[m
