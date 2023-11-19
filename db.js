// // const mysql = require('mysql')
// // require('dotenv').config()

// // const pool = mysql.createPool({
// //     host: process.env.DB_HOST,
// //     user: process.env.DB_USER,
// //     password: process.env.DB_PASSWORD,
// //     database: process.env.DB_NAME,
// //     connectionLimit: 10,
// // })

// // async function fetchData(){
// //     try{
// //         let tb = 'users'
// //         let results = await pool.query(`SELECT * FROM ${tb}` )
// //         console.log(results)
// //     }catch(error){
// //         console.log('there was an error')
// //         console.error(error)
// //     }finally{
// //         pool.end()
// //     }

// // }
// // fetchData()

// const mysql = require('mysql');
// require('dotenv').config();

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     connectionLimit: 10,
// });

//  function fetchData() {
//     let results
//     try {
//         console.log('Connecting to MySQL server...');
//         results = pool.query('SELECT * FROM users');
//         console.log(results);
        

//     } catch (error) {
//         console.error('Error executing query:', error.message);
//     } finally {
//         pool.end();
        
//     }
//     return results;
// }

// fetchData();
// module.exports=fetchData
