const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true },
  email: { 
    type: String, 
    required: true },
  date: { 
    type: Date,
    default: Date.now },
});

const User = mongoose.model('users', userSchema);

module.exports = User
