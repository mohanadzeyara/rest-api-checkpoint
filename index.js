const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000
const ConnectDB = require('./config/connectDB')
const UserRoutes = require('./Routes/UserRoutes')
const ProductRoutes = require('./Routes/ProductRoutes')
const cors = require('cors')

ConnectDB()

const corsOptions = {
  origin: process.env.FonrtURL,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}
app.use(cors(corsOptions))

app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

app.use('/user', UserRoutes)
app.use('/product', ProductRoutes)

app.use((req, res) => {
  return res.status(404).send('Not found')
})

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

module.exports = app
