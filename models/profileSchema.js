const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId for referencing users
    ref: 'users', // Reference the 'users' collection
    required: true,
  },
    skills: { 
    type: [String], 
    required: true },
    description: { 
    type: String, 
    required: true },
    phone: { 
    type: String, 
    required: false },
    school: { 
    type: String, 
    required: false },
    date: { 
    type: Date,
    default: Date.now },
});

const profile = mongoose.model('profiles', profileSchema);

module.exports = profile
