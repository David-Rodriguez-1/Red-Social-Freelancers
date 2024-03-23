const express = require('express')
// const initDB = require('./src/config/db')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

require('./src/config/db')

const port = 3001

// const passport = require('passport')

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

// app.use(passport.initialize())

app.use(require('./src/routes/index'))

mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a la base de datos:', err)
})

app.listen(port, () => {
  console.log(`La aplicacion esta en linea en el puerto ${port}!`)
})

// initDB()