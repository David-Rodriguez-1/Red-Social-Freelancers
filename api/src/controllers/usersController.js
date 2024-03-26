const { User, Connection } = require('../models/index')

const getAllUsers = async () => {
  try {
    const users = await User.find({}).populate('Connection')
    return users
  } catch (error) {
    console.error('Error al recuperar los usuarios:', error)
  }
}

const addUser = async (user) => {
  try {
    const newUser = await User.create(user)
    return newUser
  } catch (error) {
    console.log('mensaje del controller: ', error)
  }
}

module.exports = { getAllUsers, addUser }
