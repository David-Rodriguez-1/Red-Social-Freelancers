const { getUsers, createUser } = require('../controllers/userController/index')

const handleGetUsers = async (req, res) => {
  try {
    const data = await getUsers()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ mensaje_de_error: error.message })
  }
}

const addUserHandler = async (req, res) => {
  console.log(req.body);
  const data = req.body
  console.log(data);
  try {
    const newUser = await createUser(data)
    res.status(201).json(newUser)
  } catch (error) {
    console.log({ mensaje_de_error: error })
  }
}

module.exports = { handleGetUsers, addUserHandler }
