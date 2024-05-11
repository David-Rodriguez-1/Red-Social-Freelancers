const { getUsers, createUser } = require('../controllers/userController/index')

const handleGetUsers = async (req, res) => {
  try {
    const data = await getUsers()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ mensaje_de_error: error.message })
  }
}

const addUserHandler = (req, res) => {
  const data = req.body
  try {
    const newUser = createUser(data)
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = { handleGetUsers, addUserHandler }
