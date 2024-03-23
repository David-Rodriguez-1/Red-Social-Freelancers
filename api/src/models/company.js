const mongoose = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate')

const CompanyScheme = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  company_name: {
    type: String,
    unique: true,
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
  }
})

// CompanyScheme.plugin(mongoosePaginate)

// const modelCompany = mongoose.model('SampleModel', CompanyScheme)

// modelCompany.paginate().then({}) // Usage

module.exports = CompanyScheme
