const mongoose = require('mongoose')
const UserScheme = require('./user')
const portfolioSchema = require('./portfolio')
const companySchema = require('./company')
const ConnectionSchema = require('./connections')
const jobSchema = require('./jobs')

const User = mongoose.model('User', UserScheme)
const Portfolio = mongoose.model('Portfolio', portfolioSchema)
const Company = mongoose.model('Company', companySchema)
const Connection = mongoose.model('Connection', ConnectionSchema)
const Job = mongoose.model('Job', jobSchema)

module.exports = { User, Portfolio, Company, Connection, Job }
