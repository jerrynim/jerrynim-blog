import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

interface Email {
  from: string;
  to: string;
  subject: string;
  html: string;
}

const sendMail = (email: Email) => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendTotMail = (nickname: string, message: string) => {
  const email = {
    from: "jerrynim",
    to: "tjerry3@naver.com",
    subject: "🅿️this is from portfolio",
    html: `${nickname} <br/><br/> ${message}`
  };
  return sendMail(email);
};
