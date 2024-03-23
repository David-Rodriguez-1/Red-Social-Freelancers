const { User } = require('../models/index')

const addUser = async (user) => {
  try {
    const newUser = await User.create(user)
    return newUser
  } catch (error) {
    console.log('mensaje del controller: ', error)
  }
}

module.exports = { addUser }
