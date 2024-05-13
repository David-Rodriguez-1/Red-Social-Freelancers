const { getUsers } = require('./getUsers')
const { createUser } = require('./createUser')
const {
  connectionController,
  unfollowUserController
} = require('./followUserController')
const { updateUser } = require('./updateUser')
const { getPosts } = require('./postsController')

module.exports = {
  getUsers,
  createUser,
  connectionController,
  unfollowUserController,
  updateUser,
  getPosts
}
