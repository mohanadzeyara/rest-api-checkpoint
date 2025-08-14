// config/connectDB.js
const mongoose = require('mongoose');

const ConnectDB = async () => {
  try {
    console.log('MONGO_URI from env:', process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // stop the server if DB fails
  }
};

module.exports = ConnectDB;

