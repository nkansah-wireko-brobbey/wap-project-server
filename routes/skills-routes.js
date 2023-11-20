const express = require('express')

const Skills = require('../models/skillsSchema')


let routes = express.Router({"caseSensitive":false,"strict":false})

routes.get('/', (req,res,next)=>{

    Skills.find()
    .then((skills)=>{ 
        res.status(200).send(skills)})
    .catch((error)=>{
        res.status(500).send(error)})

})
routes.post('/create',async (req,res,next)=>{
    const {skill} = req.body

    console.log(req.body)

    const skillRes = await Skills.findOne({skill})

    if(skillRes){
        res.status(409).send({Message: "Skill already exitst"})
    }else{
        const newSkill = new Skills({
            skill: skill
        })
        newSkill.save()
            .then((savedSkill)=>{ res.status(201).json(savedSkill)})
            .catch((error)=>{res.status(500).json(error)})
    }

})


module.exports = routes