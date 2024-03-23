const mongoose = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate')

const PortfolioSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: { type: String, required: true },
  description: String,
  skills: String,
  experience: String,
  education: String,
  certifications: String,
  created_at: { type: Date, default: Date.now }
})

// PortfolioSchema.plugin(mongoosePaginate)

// const modelPortfolio = mongoose.model('SampleModel', PortfolioSchema)

// modelPortfolio.paginate().then({}) // Usage

module.exports = PortfolioSchema