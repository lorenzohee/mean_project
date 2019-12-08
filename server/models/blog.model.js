const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  blogType: {
    type: String
  },
  bannerUrl: {
    type: String
  },
  blogAccess: {
    type: String,
    required: true
  },
  tags: {
    type: Array
  }
}, {
    versionKey: false
  });


module.exports = mongoose.model('Blog', BlogSchema);
