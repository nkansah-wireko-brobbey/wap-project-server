
const mongoose = require('mongoose')
require('dotenv').config();

let uri = process.env.MONGO_URI || 'mongodb+srv://wirekobrobbeyofficial:xTbh7E4g8dhI9dK4@cluster0.8ymjnyt.mongodb.net/wap_project_db?retryWrites=true&w=majority'


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri)
        console.log(`Mongo connected at: ${conn.connection.host}`)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
// connectDB()

// console.log('test')
module.exports = connectDB