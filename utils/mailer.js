const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'wirekobrobbeyofficial@gmail.com',
    pass: 'qplaggemgzalcsmp'
  }
});

// // Email content
// const mailOptions = {
//   from: 'wirekobrobbeyofficial@gmail.com',
//   to: 'wirekobrobbey27@gmail.com',
//   subject: 'Connection Request from Skills App',
//   text: 'Hello, this is the body of the email!'
// };

// // Send email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.error('Error:', error);
//   }
//   console.log('Email sent:', info.response);
// });
async function sendConnectMail(recipient,username){

    // Email content
const mailOptions = {
    from: 'wirekobrobbeyofficial@gmail.com',
    to: `${recipient}`,
    subject: 'Connection Request from Skills App',
    text: `Hi, You have received a connectioin request from ${username}`
  };

  try{
      const response = await transporter.sendMail(mailOptions)
      const info = response
      return info;
  }catch(err){
      console.log(err)
  }

}

// async function send(){
//    await sendConnectMail('wirekobrobbey27@gmail.com').then((info)=>{
//     console.log(info)
//    }).catch((err)=>{console.log(err)})
//     // console.log(res)
// }
// send()
module.exports = {sendConnectMail}
