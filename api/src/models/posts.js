const mongoose = require('mongoose')

const PostsScheme = new mongoose.Schema({
  id_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  media: {
    type: String
  },
  content: {
    type: String,
    require: true
  },
  comments: {
    type: Array,
    default: []
  },
  likes: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = PostsScheme
