const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/try_node',
  { useNewUrlParser: true }
);

const articleSchema = new mongoose.Schema({
  title: String,
  text: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = {
  Article
};
