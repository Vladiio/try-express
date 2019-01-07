const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.methods.verifyPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
userSchema.pre('save', async function(next) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(this.password, saltRounds);
  this.password = hash;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = {
  Article,
  User
};
