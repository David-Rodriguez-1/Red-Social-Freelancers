const { getUsers } = require('./getUsers')
const { createUser } = require('./createUser')
const {
  connectionController,
  unfollowUserController
} = require('./followUserController')
const { updateUser } = require('./updateUser')
const { getPosts, addPostUser } = require('./postsController')
const { login } = require('./login')

module.exports = {
  getUsers,
  createUser,
  connectionController,
  unfollowUserController,
  updateUser,
  getPosts,
  addPostUser,
  login
}
