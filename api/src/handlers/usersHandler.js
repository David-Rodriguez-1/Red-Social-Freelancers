const { getUsers } = require('../controllers/userController/index')

const handleGetUsers = async (req, res) => {
  try {
    const data = await getUsers()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ mensaje_de_error: error.message })
  }
}

module.exports = { handleGetUsers }
