const { User } = require('../../models/index')

const createUser = async (req, res) => {
  try {
    const { email, last_name, name, password, username } = req.body

    const username_repeat = await User.findOne({ username })
    if (username_repeat)
      return res.status(400).json({ message: 'El nombre de usuario ya existe' })

    const user_repeat = await User.findOne({ email })
    if (user_repeat)
      return res.status(400).json({ message: 'El email ya existe' })

    const newUsers = await User.create({
      email,
      last_name,
      name,
      password,
      username
    })

    res.status(201).json(newUsers)
  } catch (error) {
    console.log('error del back', error)
    return res.status(500).json({ error: error.message })
  }
}

module.exports = { createUser }
