const { User } = require('../../models/index')

const getUsers = async () => {
  try {
    const users = await User.find({}).populate('Connection')
    return users
  } catch (error) {
    console.error('Error al recuperar los usuarios:', error)
  }
}

module.exports = { getUsers }
