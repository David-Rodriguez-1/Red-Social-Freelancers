const { Router } = require('express')
const { addPostUserHandler, getPostsHandler } = require('../handlers/postUserHandler')
const posts = Router()

posts.get('/', getPostsHandler)
posts.post('/', addPostUserHandler)
// posts.put('/:id', UpdatePostHandler)

module.exports = posts
