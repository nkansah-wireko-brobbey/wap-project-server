const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    skill: { 
    type: String, 
    required: true },
    description: { 
    type: String, 
    required: false },
    img: { 
    type: String, 
    required: false },
    date: { 
    type: Date,
    default: Date.now },
});

const skills = mongoose.model('skills', skillsSchema);

module.exports = skills
