const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// example route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// your user routes
app.use('/user', require('./routes/userRoutes')); // adjust path if needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
