const { Router } = require('express');
const indexRouter = Router();

const userRouter = require('./user');
const postsRouter = require('./posts');
const company = require('./company');
indexRouter.use('/', userRouter);
indexRouter.use('/post', postsRouter)
indexRouter.use('/company', company)
// const routes = [
//   {
//     path: 'user'
//   }
// ]

// routes.forEach(route => {
//     return indexRouter.use(`/${route.path}`, require(`./${route.path}`))
// })

module.exports = indexRouter