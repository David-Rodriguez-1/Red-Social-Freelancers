const mongoose = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate')

const CompanyScheme = new mongoose.Schema({
  company_name: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  industry: {
    type: String
  },
  company_description: {
    type: String
  },
  logo_url: {
    type: String
  },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

// CompanyScheme.plugin(mongoosePaginate)

// const modelCompany = mongoose.model('SampleModel', CompanyScheme)

// modelCompany.paginate().then({}) // Usage

module.exports = CompanyScheme
