const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
require('dotenv').config()
const db = require('./mongo-connect')
const userRoutes = require('./routes/user-routes')
const profileRoutes = require('./routes/profile-routes')
const skillsRoutes = require('./routes/skills-routes')
const mailerRoutes = require('./routes/mailer-route')


db()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/user', userRoutes)
app.use('/profile', profileRoutes)
app.use('/skills', skillsRoutes)
app.use('/mailer', mailerRoutes)

app.get('/', function(req, res){ 
    res.send(db());
})

app.use(function(req, res){ 
    res.status(404).send('404');
})

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`Server started on ${port}`)
})