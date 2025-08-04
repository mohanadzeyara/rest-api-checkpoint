const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const ConnectDB = require('./config/connectDB')
const UserRoutes=require('./Routes/UserRoutes')
const ProductRoutes= require('./Routes/ProductRoutes')

ConnectDB()

app.use(express.json())
app.use("/uploads",express.static(__dirname+"/uploads"))

// Routes =>
app.use('/user',UserRoutes)
app.use('/product',ProductRoutes)

// NOT FOUND
app.use((req,res)=>{
  return res.status(404).send('Not found')
})

app.listen(PORT, () => console.log('server is running'))