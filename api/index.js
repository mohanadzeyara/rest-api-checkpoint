const express = require('express');
const ConnectDB = require('./config/connectDB');
const UserRoutes = require('./Routes/UserRoutes');
const ProductRoutes = require('./Routes/ProductRoutes');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

const corsOptions = {
  origin: process.env.FonrtURL,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors(corsOptions));


app.use('/user', UserRoutes);
app.use('/product', ProductRoutes);

app.use((req, res) => res.status(404).send('Not found'));


module.exports = async (req, res) => {
  await ConnectDB(); 
  return app(req, res);
};
