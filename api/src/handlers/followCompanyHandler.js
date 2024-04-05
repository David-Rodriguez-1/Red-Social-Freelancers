const {
  connCompanyController,
  unfollowCompanyController
} = require('../controllers/companyControllers/index')

const followCompanyHandler = async (req, res) => {
  const dataID = req.body
  console.log(dataID);
  try {
    const newConnCompany = await connCompanyController(dataID)
    res.status(201).json(newConnCompany)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const unfollowCompanyHandler = async (req, res) => {
  const dataID = req.body
  try {
    const unfollow = await unfollowCompanyController(dataID)
    res.status(201).json(unfollow)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { followCompanyHandler, unfollowCompanyHandler }