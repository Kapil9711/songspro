import nodemailer from "nodemailer";

const sendEmail = async ({ email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    service: "gmail",
    auth: { user: process.env.SMTP_EMAIL, pass: process.env.SMTP_PASSWORD },
  });
  const msg = {
    from: `${process.env.SMTP_FROM_Name} <${process.env.SMTP_FROM_EMAIL}>`,
    to: email,
    subject,
    html: message,
  };
  await transporter.sendMail(msg);
};
export default sendEmail;
