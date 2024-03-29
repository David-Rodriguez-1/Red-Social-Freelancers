const { addPostUser } = require('../controllers/postsController')

const addPostUserHandler = async (req, res) => {
  const post = req.body
  try {
    const newPost = await addPostUser(post)
    res.status(201).json(newPost)
  } catch (error) {
    res.status(500).json({ mensaje_de_error: error.message })
  }
}

module.exports = { addPostUserHandler }
