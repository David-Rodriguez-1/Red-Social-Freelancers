const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

require('./src/config/db')

const port = 3001

// for parsing json
app.use(
  bodyParser.json({
    limit: '20mb'
  })
)
// for parsing application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: true
  })
)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

app.use(require('./src/routes/index'))

mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a la base de datos:', err)
})

app.listen(port, () => {
  console.log(`La aplicacion esta en linea en el puerto ${port}!`)
})