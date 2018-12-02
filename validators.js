const { check } = require('express-validator/check');

const createArticleValidators = [
  check('title')
    .isLength({ min: 5 })
    .withMessage('The value is too short'),
  check('text')
    .isLength({ min: 5 })
    .withMessage('The value is too short')
];

module.exports = {
  createArticleValidators
};
