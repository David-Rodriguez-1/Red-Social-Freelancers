const { Router } = require('express')
const getUsersHandler = require('../handlers/userHandler')
const {addUserHandler} = require('../handlers/addUsersHandler')

const users = Router()

users.get('/', getUsersHandler)
users.post('/', addUserHandler)

module.exports = users