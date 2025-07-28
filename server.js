const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const ConnectDB = require('./config/connectDB')
const UserRoutes=require('./Routes/UserRoutes')

ConnectDB()

app.use(express.json())

app.use('/user',UserRoutes)

app.use((req,res)=>{

     return res.status(404).send('Not found')
})

app.listen(PORT, () => console.log('server is running'))