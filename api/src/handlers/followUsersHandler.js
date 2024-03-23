const { connectionController } = require('../controllers/followUserController')

const followUserHandler = async (req, res) => {
  const data = req.body // Supongamos que estos valores se envían en el cuerpo de la solicitud
  try {
    // Crea una nueva conexión en la base de datos
    const newConnection = await connectionController(data)
    res.status(201).json(newConnection)
  } catch (error) {
    console.log('Error al crear la conexión: ', error)
    res.status(500).json({ error: 'Error al crear la conexión' })
  }
}

module.exports = { followUserHandler }
