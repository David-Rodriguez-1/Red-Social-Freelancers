const { Router } = require('express')
const { handleGetUsers } = require('../handlers/usersHandler')
const { createUser, login } = require('../controllers/userController/index')
const {
  followUserHandler,
  unfollowUserHandler
} = require('../handlers/followUsersHandler')

const users = Router()

users.get('/', handleGetUsers)
users.post('/', createUser)
users.post('/login', login)
users.post('/follow', followUserHandler)
users.put('/follow', unfollowUserHandler)

module.exports = users
