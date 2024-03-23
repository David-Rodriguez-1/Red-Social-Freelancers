const { Router } = require('express')
const { handleGetUsers } = require('../handlers/getUsersHandler')
const { addUserHandler } = require('../handlers/addUsersHandler')
const { followUserHandler } = require('../handlers/followUsersHandler')

const users = Router()

users.get('/', handleGetUsers)
users.post('/', addUserHandler)
users.post('/follow', followUserHandler)

module.exports = users
