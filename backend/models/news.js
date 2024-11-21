const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  title: String,
  description: String,
  url: String,
  image: String,
  source: String,
  publishedAt: Date,
});

module.exports = mongoose.model('News', newsSchema);
