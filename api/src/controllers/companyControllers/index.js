const { createCompany } = require('./createCompany')
const { getCompanies } = require('./getCompanies')
const {
  connCompanyController,
  unfollowCompanyController
} = require('./followCompany')

module.exports = {
  createCompany,
  getCompanies,
  connCompanyController,
  unfollowCompanyController
}