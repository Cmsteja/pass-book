const mongoose = require('mongoose');
require('dotenv').config()

const mongoURI = process.env.MONGO_URL ;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Error: ', err));