const { Router } = require('express')
const {
  handleGetUsers,
  addUserHandler
} = require('../handlers/usersHandler')
const {
  followUserHandler,
  unfollowUserHandler
} = require('../handlers/followUsersHandler')

const users = Router()

users.get('/', handleGetUsers)
users.post('/', addUserHandler)
users.post('/follow', followUserHandler)
users.put('/follow', unfollowUserHandler)

module.exports = users
