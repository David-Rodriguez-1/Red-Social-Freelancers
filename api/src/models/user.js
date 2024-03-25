const mongoose = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate-v2')

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    user_type: {
      type: String,
      enum: ['freelancer', 'company', 'recruiter'],
      required: true
    },
    profile_image: {
      type: String
    },
    bio: {
      type: String
    },
    location: {
      type: String
    },
    website_url: {
      type: String
    },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Referencias a los seguidores
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Referencias a los usuarios seguidos
  },
  { strictPopulate: false }
)

// UserScheme.plugin(mongoosePaginate)
// const modelUser = mongoose.model('SampleModel', UserScheme)
// modelUser.paginate().then({}) // Usage
// UserScheme.plugin(mongoosePaginate)

module.exports = UserScheme
