const { getCompanies } = require('../controllers/companyControllers/index')

const getCompanyHandler = async (req, res) => {
  try {
    const companies = await getCompanies()
    res.status(200).json(companies)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { getCompanyHandler }