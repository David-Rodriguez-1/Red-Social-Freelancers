const { User } = require('../../models/index')

const createUser = async (user) => {
  try {
    const newUser = await User.create(user)
    return newUser
  } catch (error) {
    console.log('Erorr al agregar el usuario: ', error)
  }
}

module.exports = { createUser }
