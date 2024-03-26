const mongoose = require('mongoose')

const PostsScheme = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  likes: {
    type: Number
  }
})

module.exports = PostsScheme
