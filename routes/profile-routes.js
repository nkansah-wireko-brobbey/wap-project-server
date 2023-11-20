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
// routes.patch('/update', async (req,res,next)=>{
  
//  const {email, password} = req.body;

//  const user = await User.findOne({email})
 
//  if(user){
//      console.log(user)
//     console.log('user: ',password, user.password)
//     comparePassword(password, user.password).then((val)=>{
//         if(val == true){

//             res.status(200).send({message: 'login successful',user})
//         }else{
//             res.status(404).send({message: 'Invalid password'})
//         }
//     }).catch((err)=>{
//         res.status(501).send({message:err.message})
//     })
//     // console.log(passwordMatch)
    
//  }else{
//     res.status(404).send({message:'Invalid username and password'})
//  }
// })



routes.get('/',(req,res,next)=>{

// console.log('oooooo')
    User.find()
    .then((users)=>{ 
        res.send(users)})
    .catch((error)=>{
        res.send(error)})
})

module.exports = routes