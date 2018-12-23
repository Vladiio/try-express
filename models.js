const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  text: String
});

const Article = mongoose.model('Article', articleSchema);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

userSchema.pre('save', next => {
  // TODO encrypt user password
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = {
  Article,
  User
};
