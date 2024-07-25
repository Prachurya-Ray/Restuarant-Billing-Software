// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// dotenv.config()
// module.exports = async(email, subject, text) =>{
//     try{
//         const transporter = nodemailer.createTransport({
//             host:process.env.HOST,
//             service:process.env.Service,
//             port:Number(process.env.Email_PORT),
//             secure:Boolean(process.env.Secure),
//             auth:{
//                 user:process.env.USER,
//                 pass:process.env.PASS,
//             }
//         });
//         await transporter.sendMail({
//             from:process.env.USER,
//             to:email,
//             subject:subject,
//             text:text
//         })
//         console.log("Email Sent Successfully")
//     }catch (error){
//         console.log("Email not sent",error)
//     }
// }

const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

module.exports = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE, // Corrected the environment variable name
            port: Number(process.env.EMAIL_PORT), // Use consistent casing for EMAIL_PORT
            secure: Boolean(process.env.SECURE), // Use consistent casing for SECURE
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text,
        });
        console.log("Email Sent Successfully");
    } catch (error) {
        console.log("Email not sent", error);
    }
};

