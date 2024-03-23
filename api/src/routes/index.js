const { Router } = require('express');
const indexRouter = Router();

const userRouter = require('./user');
indexRouter.use('/', userRouter);
// const routes = [
//   {
//     path: 'user'
//   }
// ]

// routes.forEach(route => {
//     return indexRouter.use(`/${route.path}`, require(`./${route.path}`))
// })

module.exports = indexRouter