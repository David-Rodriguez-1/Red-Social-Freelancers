const { User } = require('../../models/index')
const bcrypt = require('bcrypt')

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    console.log({password, email});

    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ error: 'El usuario no existe' })

    const isMatch = await bcrypt.compare(password, user.password)
    console.log(isMatch);
    if (!isMatch)
      return res.status(400).json({ error: 'El password es incorrecto' })

    res.status(201).json({message: 'Ingreso autorizado'})
  } catch (error) {
    console.log('error del back', error)
    return res.status(500).json({ error: error.message })
  }
}

module.exports = { login }
