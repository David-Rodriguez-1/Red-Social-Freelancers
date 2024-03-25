const { connectionController } = require('../controllers/followUserController')

const followUserHandler = async (req, res) => {
  const data = req.body
  try {
    const newConnection = await connectionController(data)
    res.status(201).json(newConnection)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la conexión' })
  }
}

module.exports = { followUserHandler }
