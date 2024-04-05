const { createCompany } = require('../controllers/companyControllers/index')

const createCompanyHandler = (req, res) => {
    const data = req.body
    try {
        const newCompany = createCompany(data)
        res.status(201).json(newCompany)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { createCompanyHandler }