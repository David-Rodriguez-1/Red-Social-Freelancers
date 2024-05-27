const { User } = require('../../models/index')
const bcrypt = require('bcrypt')
const UserScheme = require('../../models/user')

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ error: 'El usuario no existe' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch)
      return res.status(400).json({ error: 'Contraseña incorrecta' })
    return res.status(201).json(user)
  } catch (error) {
    console.log('error del back', error)
    return res.status(500).json({ error: error.message })
  }
}

module.exports = { login }
