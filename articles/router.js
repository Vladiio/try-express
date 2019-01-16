const { Router } = require('express');
const articleControllers = require('./controllers');
const validators = require('../validators');

router = Router();

const loginRequired = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('Not allowed');
  }
  next();
};

router.get(
  '/create',
  loginRequired,
  articleControllers.createArticlePage
);
router.get('/:id', articleControllers.articleDetail);
router.post(
  '/create',
  loginRequired,
  validators.createArticleValidators,
  articleControllers.createArticleHandler
);
router.get(
  '/:id/update',
  loginRequired,
  articleControllers.updateArticlePage
);
router.post(
  '/:id/update',
  loginRequired,
  articleControllers.updateArticleHandler
);

module.exports = router;
