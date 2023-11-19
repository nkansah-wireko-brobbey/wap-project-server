const express = require('express')
const User = require('../models/userSchema')
const {hashPassword,comparePassword} = require('../utils/encryptionHandler')


let routes = express.Router({"caseSensitive":false,"strict":false})

routes.post('/create', async (req,res,next)=>{
    const {username, password, email} = req.body;

    const user = await User.findOne({email})

    if(user){

        res.status(409).json({message: "User already exists"})

    }else{

        hashPassword(req.body.password).then((val)=>{
         const newUser = new User({
             username: req.body.username,
             email: req.body.email,
             password: val
         })
         newUser.save()
             .then((savedUser)=>{ res.status(201).json(savedUser)})
             .catch((error)=>{res.status(500).json(error)})
     
         }).catch((err)=>{
             console.log('Error',err)
             res.status(500).json(err)
         })
    }
  
    
    
})
routes.post('/login', async (req,res,next)=>{
  
 const {username, password} = req.body;

 const user = await User.findOne({username})
 
 if(user){
     console.log(user)
    console.log(password, user.password)
    comparePassword(password, user.password).then((val)=>{
        res.status(200).send({message: 'login successful',user})
    }).catch((err)=>{
        res.status(501).send({err})
    })
    // console.log(passwordMatch)
    
 }else{
    res.send('Invalid Login')
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