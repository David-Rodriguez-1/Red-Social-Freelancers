const mongoose = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate-v2')

const UserScheme = new mongoose.Schema({
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
    type: String, enum: ['freelancer', 'company', 'recruiter'], required: true
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
  }
})

// UserScheme.plugin(mongoosePaginate)

// const modelUser = mongoose.model('SampleModel', UserScheme)

// modelUser.paginate().then({}) // Usage
// UserScheme.plugin(mongoosePaginate)
// module.exports = mongoose.model('UserScheme', UserScheme)
module.exports = UserScheme