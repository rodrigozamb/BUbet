import { env } from '@/env'
import nodemailer from 'nodemailer'
import { Resend } from 'resend';

const resend = new Resend(env.RESEND_KEY);

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


  
export async function resend_sendConfirmationEmail(to: string, user_id: string) {
    // send mail with defined transport object
    const {data, error} = await resend.emails.send({
      from: "BU Bet Team <bubet@send.api.bu-bet.com>",
      to: [to],
      subject: "Confirmação de Cadastro", // Subject line
      text: `Obrigado por se cadastrar na nossa plataforma, clique no LINK para confirmar sua conta`, // plain text body
      html: `<b>Obrigado por se cadastrar na nossa plataforma, clique no <a target="_blank" href=${env.CONFIRMATION_URL}/${user_id}> LINK </a> para confirmar sua conta </b>`, // html body
    });
  
    if (error) {
      console.log("Error sending message");
      return console.error({ error });
    }
    console.log("Message sent");
    console.log({ data });
  }

export async function resend_sendForgetPassword(to: string, token: string) {
    // send mail with defined transport object
    const {data, error} = await resend.emails.send({
      from: "BU Bet Team <bubet@send.api.bu-bet.com>",
      to: [to],
      subject: "Redefinição de Senha", // Subject line
      text: `Para redefinir sua senha clique AQUI!!!`, // plain text body
      html: `<b>Para redefinir sua senha clique <a target="_blank" href=${env.FRONTEND_URL}/redefine/${token}> AQUI </a> </b>`, // html body
    });
  
    if (error) {
      console.log("Error sending message");
      return console.error({ error });
    }
    console.log("Message sent");
    console.log({ data });
  }

export async function resend_sendNewUsercreatedEmail(to: string, name: string, email: string) {
    // send mail with defined transport object
    const {data, error} = await resend.emails.send({
      from: "BU Bet Team <bubet@send.api.bu-bet.com>",
      to: [to],
      subject: "novo usuário criado", // Subject line
      text: `Novo usuário criado!!!`, // plain text body
      html: `<b>Novo usuário criado : ${name} - ${email}`, // html body
    });
  
    if (error) {
      console.log("Error sending message");
      return console.error({ error });
    }
    console.log("Message sent");
    console.log({ data });
  }

