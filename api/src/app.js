// const express = require('express')
// const server = express()
// const bodyParser = require('body-parser')
// const main = require('./config/db.js')
// const morgan = require('morgan')
// const coockies = require('cookie-parser')
// const routes = require('./routes/index.js')
// console.log(main);


// server.use(
//   bodyParser.json({
//     limit: '50mb'
//   })
// )
// server.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
// server.use(morgan('dev'))
// server.use(coockies())
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Credentials', 'true')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   )
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
//   next()
// })

// server.use('/', routes)

// server.use((err, req, res, next) => {
//   // eslint-disable-line no-unused-vars
//   const status = err.status || 500
//   const message = err.message || err
//   console.error(err)
//   res.status(status).send(message)
// })

// main()


// module.exports = server;