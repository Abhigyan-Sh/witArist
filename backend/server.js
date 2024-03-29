import express from 'express'
import cors from 'cors'
import connectToMongoDB from './mongoDB/connectToMongoDB.js'
import { create, deletion, read, update, filter } from './controllers/index.js'

// Setup
const app = express()
const PORT = process.env.PORT
connectToMongoDB()

// Middlewares
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

// Controllers
app.use('/create/', create)
app.use('/deletion/', deletion)
app.use('/update/', update)
app.use('/filter/', filter)
app.use('/', read)

app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`)
})