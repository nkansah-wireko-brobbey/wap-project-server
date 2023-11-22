const express = require('express')
const User = require('../models/userSchema')
const Profile = require('../models/profileSchema')
const {sendConnectMail} = require('../utils/mailer')


let routes = express.Router({"caseSensitive":false,"strict":false})


routes.post('/', async (req,res,next)=>{
    const {sender, recipient} = req.body

    const senderObj = await Profile.findOne({userId: sender}).populate('userId', '-password -__v -date') 
    const recipientObj = await Profile.findOne({userId: recipient}).populate('userId', '-password -__v -date') 

    if(senderObj && recipientObj){
        let senderEmail = senderObj.userId.email
        let recipientName = recipientObj.userId.username

        await sendConnectMail(senderEmail,recipientName).then((info)=>{
                console.log(info)
                res.status(200).json({Message: "Success"})
         }).catch((err)=>{console.log(err)
                res.status(500).json({Message: "Failed"})
        })

    }else{
        console.log(senderObj)
        console.log(recipientObj)
        res.status(404).json({Message: "Failed"})
    }

})

module.exports = routes