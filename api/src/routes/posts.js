const { Router } = require('express')
const { addPostUserHandler } = require('../handlers/postUserHandler')
const posts = Router()

// posts.get('/', handleGetUsers)
posts.post('/', addPostUserHandler)
// posts.put('/:id', unfollowUserHandler)

module.exports = posts
