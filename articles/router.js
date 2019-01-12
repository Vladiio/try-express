const { Router } = require('express');
const articleControllers = require('./controllers');
const validators = require('../validators');

router = Router();

router.get('/create', articleControllers.createArticlePage);
router.get('/:id', articleControllers.articleDetail);
router.post(
  '/create',
  validators.createArticleValidators,
  articleControllers.createArticleHandler
);
router.get(
  '/:id/update',
  articleControllers.updateArticlePage
);
router.post(
  '/:id/update',
  articleControllers.updateArticleHandler
);

module.exports = router;
