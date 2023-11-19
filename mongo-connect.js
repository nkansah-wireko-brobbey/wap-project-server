
const mongoose = require('mongoose')
require('dotenv').config();


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo connected at: ${conn.connection.host}`)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
// connectDB()

// console.log('test')
module.exports = connectDB