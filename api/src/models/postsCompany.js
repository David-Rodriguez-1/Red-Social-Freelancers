import mongoose from "mongoose"

const PostsCompanyScheme = new mongoose.Schema({
  id_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String
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

export const PostsCompany = mongoose.model('PostsCompany', PostsCompanyScheme)

