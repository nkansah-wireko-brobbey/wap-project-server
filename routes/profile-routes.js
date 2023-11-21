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

    const profile = await Profile.findOne({userId: req.params.id}).populate('userId', '-password -__v -date')

    if(profile){
        res.status(200).json(profile)
    }else{
        res.status(404).json({message: "User not found"})
    }

})

routes.get('/findWithSkill/:skill', async (req, res, next) => {
    const skillToSearch = req.params.skill;
  
    try {
      const profilesWithUsernames = await Profile.aggregate([
        {
          $match: { skills: skillToSearch } // Filter profiles based on the skill
        },
        {
          $lookup: {
            from: 'users', // Target collection (users)
            localField: 'userId',
            foreignField: '_id',
            as: 'userData'
          }
        },
        {
          $unwind: '$userData' // Unwind the array created by $lookup
        },
        {
          $project: {
            _id: 0,
            userId: 0,
            'userData._id': 0,
            'userData.password': 0,
            'userData.date': 0,
            'userData.__v': 0
          }
        }
      ]);
      console.log(profilesWithUsernames); // Add this line for debugging

  
      res.status(200).json(profilesWithUsernames);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


routes.get('/all',async (req,res,next)=>{

    const profile = await Profile.find().populate('userId', '-password -__v -date')

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