const express = require('express')
const User = require('../models/userSchema')
const Profile = require('../models/profileSchema')
const {hashPassword,comparePassword} = require('../utils/encryptionHandler')


let routes = express.Router({"caseSensitive":false,"strict":false})

routes.post('/create', async (req,res,next)=>{
    const {description, school,userId,skills,mobile} = req.body
   

    const profile = await Profile.findOne({userId: userId})

    if(profile){

        res.status(409).json({message: "User already exists"})

    }else{

         const newProfile = new Profile({
             description: description,
             school: school,
             userId: userId,
             skills: skills,
             mobile: mobile
         })
         newProfile.save()
             .then((savedUser)=>{ res.status(201).json(savedUser)})
             .catch((error)=>{res.status(500).json(error)})
     
     
    }
  
    
})
routes.get('/findOne/:id',async (req,res,next)=>{

    const profile = await Profile.findOne({userId: req.params.id})

    if(profile){
        res.status(200).json(profile)
    }else{
        res.status(404).json({message: "User not found"})
    }

})



routes.get('/',(req,res,next)=>{

// console.log('oooooo')
    User.find()
    .then((users)=>{ 
        res.send(users)})
    .catch((error)=>{
        res.send(error)})
})

module.exports = routes