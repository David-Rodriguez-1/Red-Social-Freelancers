const { getAllUsers } = require('../controllers/usersController')

const handleGetUsers = async (req, res) => {
  try {
    const data = await getAllUsers()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ mensaje_de_error: error.message })
  }
}

module.exports = handleGetUsers
