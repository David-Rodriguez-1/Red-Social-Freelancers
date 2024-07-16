import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { router as companyRouter } from './src/routers/routerCompany.js'
import { router as postRouter } from './src/routers/routerPosts.js'
import { router as userRouter } from './src/routers/routerUser.js'
import { bdMongo } from './src/utils/bd.js'

const app = express()


const PORT = 3001

app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))

app.use(cookieParser())

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


app.use('/company', companyRouter)
app.use('/posts', postRouter)
app.use('/user', userRouter)


app.get('/home', (req, res) => {

  res.cookie('David', 'Rodriguez', {
    httpOnly: true,
    secure: false,
    sameSite: 'lax'
  })
})

app.listen(PORT, () => {
  console.log(`La aplicacion esta en linea en el puerto ${PORT}!`)
})

bdMongo("mongodb+srv://suarezjesu90:codercoder@eccommer.u1pd7r0.mongodb.net/?retryWrites=true&w=majority", { dbName: "plataforma_linkedin" })