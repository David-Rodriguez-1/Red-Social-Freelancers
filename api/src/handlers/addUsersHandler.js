const { addUser } = require('../controllers/addUsersController')
const addUserHandler = async (req, res) => {
  const data = req.body;
  try {
    const newUser = await addUser(data)
    res.status(201).json(newUser)
  } catch (error) {
    console.log('mensaje de handler: ', error);
  }
}

module.exports = { addUserHandler }
