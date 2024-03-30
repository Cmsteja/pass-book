const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  transactions: {
    type: Object,
    required: false,
    unique: false
  },
  // Add other properties as needed
});

// Create and export the User model
module.exports = mongoose.model('user-transactions', userSchema);