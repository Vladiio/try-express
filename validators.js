const { check } = require('express-validator/check');

const DEFAULT_LENGTH_VALIDATOR_MSG =
  'The value is too short';
const DEFAULT_LENGTH_MIN = 5;

const createArticleValidators = [
  createLengthValidator('title'),
  createLengthValidator('text')
];

const signupValidators = [
  createLengthValidator('username'),
  createLengthValidator('password')
];

function createLengthValidator(
  name,
  min = DEFAULT_LENGTH_MIN,
  max,
  msg = DEFAULT_LENGTH_VALIDATOR_MSG
) {
  return check(name)
    .isLength({ min, max })
    .withMessage(msg);
}

module.exports = {
  createArticleValidators,
  signupValidators
};
