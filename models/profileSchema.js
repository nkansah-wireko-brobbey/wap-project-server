const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true },
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

const profile = mongoose.model('profile', profileSchema);

module.exports = profile
