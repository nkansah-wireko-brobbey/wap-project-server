const express = require('express')

const app = express()
require('dotenv').config()
const db = require('./db')

app.use(express.json())
app.use(express.urlencoded)

app.use('/user/:username/:email',(req,res,next)=>{
    
})

app.get('/', function(req, res){
    res.send(db());
})

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server started ${port}`)
})