import { env } from '@/env'
import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: env.GMAIL_USER,
      pass: env.GMAIL_PASSWORD,
    },
})


export async function sendConfirmationEmail(to: string, user_id: string) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: {
        name:"BU Bet Team",
        address: env.GMAIL_USER
      },
      to: to,
      subject: "Confirmação de Cadastro", // Subject line
      text: `Obrigado por se cadastrar na nossa plataforma, clique no LINK para confirmar sua conta`, // plain text body
      html: `<b>Obrigado por se cadastrar na nossa plataforma, clique no <a target="_blank" href=${env.CONFIRMATION_URL}/${user_id}> LINK </a> para confirmar sua conta </b>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }