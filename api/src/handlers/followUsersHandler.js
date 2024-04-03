const {
  connectionController,
  unfollowUserController
} = require('../controllers/userController/index')

const followUserHandler = async (req, res) => {
  const data = req.body
  try {
    const newConnection = await connectionController(data)
    res.status(201).json(newConnection)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la conexión' })
  }
}

const unfollowUserHandler = async (req, res) => {
  const data = req.body
  try {
    const unconnection = await unfollowUserController(data)
    res.status(201).json(unconnection)
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar conexión' })
  }
}

module.exports = { followUserHandler, unfollowUserHandler }
