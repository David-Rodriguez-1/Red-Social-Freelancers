const { Company } = require('../../models/index')

const getCompanies = async () => {
  try {
    const allCompanies = await Company.find({}).populate('PostsCompany')
    return allCompanies
  } catch (error) {
    console.log({ mensaje_de_error: error })
  }
}

module.exports = { getCompanies }
