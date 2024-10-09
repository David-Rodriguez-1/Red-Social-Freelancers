import bcrypt from 'bcrypt'
import { user } from '../models/user.js'
import { ManagerUser } from '../dao/managerUser.js'

export class UserController {
  static async createUser(req, res) {
    try {
      const { email, last_name, name, password, username } = req.body

      const checkUsername = await user.findOne({ username })
      if (checkUsername)
        return res
          .status(400)
          .json({ message: 'El nombre de usuario ya existe' })

      const checkUser = await user.findOne({ email })
      if (checkUser)
        return res.status(400).json({ message: 'El email ya existe' })

      const passwordHash = await bcrypt.hash(password, 10)

      const newUsers = await user.create({
        email,
        last_name,
        name,
        password: passwordHash,
        username
      })
      console.log(newUsers)

      return res.status(201).json(newUsers)
    } catch (error) {
      console.log('error del back', error)
      return res.status(500).json({ error: error.message })
    }
  }
  static async followUser(req, res) {
    const data = req.body

    try {
      const newConnection = await connectionController(data)
      return res.status(201).json(newConnection)
    } catch (error) {
      return res.status(500).json({ error: 'Error al crear la conexión' })
    }
  }
  static async unfollowUser(req, res) {
    const data = req.body

    try {
      const unconnection = await ManagerUser.unfollowUser(data)
      return res.status(201).json(unconnection)
    } catch (error) {
      return res.status(500).json({ error: 'Error al eliminar conexión' })
    }
  }

  //?get Users
  static async GetUsers(req, res) {
    try {
      const data = await ManagerUser.getUsers()
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json({ mensaje_de_error: error.message })
    }
  }
  static async login(req, res) {
    console.log(req.body)
    try {
      const { email, password } = req.body

      const checkUser = await user.findOne({ email })
      if (!checkUser)
        return res.status(404).json({ error: 'El usuario no existe' })
      const isMatch = await bcrypt.compare(password, checkUser.password)
      if (!isMatch)
        return res.status(400).json({ error: 'Contraseña incorrecta' })

      return res.status(201).json(user)
    } catch (error) {
      console.log('error del back', error)
      return res.status(500).json({ error: error.message })
    }
  }
}
