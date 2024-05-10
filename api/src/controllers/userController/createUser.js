const { User } = require('../../models/index')

const createUser = async (user) => {
  try {
    const newUser = await User.create(user)
    return newUser
  } catch (error) {
    throw error(error)
  }
}

module.exports = { createUser }
