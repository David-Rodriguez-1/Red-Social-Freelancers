const { Posts, User } = require('../../models/index')

const findPosts = async () => {
  try {
    const posts = await Posts.find()
    return posts
  } catch (error) {
    console.log({'Error al obtener los posts': error})
  }
}

const addPostUser = async (post) => {
  try {
    const newPost = await Posts.create(post)
    const connPost_User = await User.findByIdAndUpdate(
      newPost.id_user,
      { $push: { posts: newPost._id } },
      { new: true }
    )

    return { newPost, connPost_User }
  } catch (error) {
    console.error('Error al agregar el post:', error)
  }
}

module.exports = { addPostUser, findPosts }
