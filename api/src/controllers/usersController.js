const mongoose = require('mongoose')
// console.log('hola', mongoose.model)
// const user = require('../models/user')
const { User, Portfolio, Company, Connection, Job } = require('../models/index')
// const Portfolio = require('../models/index')
// const {User} = require('../models/index') // Asegúrate de importar correctamente el modelo User
// console.log(User)



const getAllUsers = async () => {
  try {
    const users = await User.find() // Busca todos los usuarios
    return users
  } catch (error) {
    console.error('Error al recuperar los usuarios:', error)
    throw error // Puedes manejar el error según tus necesidades
  }
}

// const options = {
//   page: 1,
//   limit: 3
// }

// const parseId = (id) => {
//   return mongoose.Types.ObjectId(id)
// }

// const getAllUsers = async () => {
//   const users = await user.find()
//   console.log(users)
//   return users
// }

// const getAllUsers = (req, res) => {
//   model.paginate({}, options, (err, docs) => {
//     res.send({
//       items: docs
//     })
//   })
// }

// module.exports = getUsers
module.exports = { getAllUsers }
