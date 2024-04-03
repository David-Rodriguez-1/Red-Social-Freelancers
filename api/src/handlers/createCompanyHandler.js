const { createCompany } = require('../controllers/companyControllers/createCompany')

const createCompanyHandler = (req, res) => {
    const data = req.body
    try {
        const newCompany = createCompany(data)
        res.status(201).json(newCompany)
    } catch (error) {
        
    }
}