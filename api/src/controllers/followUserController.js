const { Connections } = require('../models/index')

const connectionController = async (conn) => {
  console.log(conn);
  try {
    // Crea una nueva conexión en la base de datos
    const newConnection = await Connections.create(conn)
    return newConnection
  } catch (error) {
    console.log('Error al crear la conexión: ', error)
    res.status(500).json({ error: 'Error al crear la conexión' })
  }
}

module.exports = { connectionController }
