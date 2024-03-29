const { Router } = require('express');
const indexRouter = Router();

const userRouter = require('./user');
const postsRouter = require('./posts');
indexRouter.use('/', userRouter);
indexRouter.use('/post', postsRouter)
// const routes = [
//   {
//     path: 'user'
//   }
// ]

// routes.forEach(route => {
//     return indexRouter.use(`/${route.path}`, require(`./${route.path}`))
// })

module.exports = indexRouter