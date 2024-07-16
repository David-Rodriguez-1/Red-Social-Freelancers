import mongoose from "mongoose"
// const mongoosePaginate = require('mongoose-paginate')

const JobSchema = new mongoose.Schema({
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  job_title: { type: String, required: true },
  job_description: String,
  job_requirements: String,
  job_location: String,
  job_type: {
    type: String,
    enum: ['Tiempo completo', 'Medio tiempo', 'Contrato'],
    required: true
  },
  salary_range: String,
  posted_at: { type: Date, default: Date.now }
})

// JobSchema.plugin(mongoosePaginate)

// const modelJobs = mongoose.model('SampleModel', JobSchema)

// modelJobs.paginate().then({}) // Usage

const Job = mongoose.model('Job', jobSchema)
