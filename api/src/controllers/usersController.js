// const mongoose = require('mongoose')
const { User, Connection } = require('../models/index')



const getAllUsers = async () => {
  try {
    const users = await User.find({}).populate('Connection')
    return users
  } catch (error) {
    console.error('Error al recuperar los usuarios:', error)
  }
}
module.exports = { getAllUsers }
