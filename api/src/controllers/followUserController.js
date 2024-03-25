const {User ,Connection } = require('../models/index')

const connectionController = async ({ user_id, connected_user_id }) => {
  try {
    const newConnection = await Connection.create({
      user_id: user_id,
      connected_user_id: connected_user_id
    })
    const followerUser = await User.findByIdAndUpdate(
      user_id,
      { $push: { connections: newConnection._id } }, // Agrega la conexión al array de conexiones
      { new: true } // Devuelve el usuario actualizado
    )

    return followerUser
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = { connectionController }
