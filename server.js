const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
require('dotenv').config()
const db = require('./mongo-connect')
const userRoutes = require('./routes/user-routes')


db()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/user', userRoutes)

app.get('/', function(req, res){ 
    res.send(db());
})

app.use(function(req, res){ 
    res.send('404');
})

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`Server started on ${port}`)
})