import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'localhost',
  port: Number(process.env.SMTP_PORT) || 1025,
  secure: false,
  auth: process.env.SMTP_USER
    ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      }
    : undefined,
});

const companyEmail = process.env.COMPANY_EMAIL || 'info@kmws.cz';

export async function sendContactEmails(data: EmailData) {
  const { name, email, message } = data;

  const emailToCompany = {
    from: `"KMWS Web" <${email}>`,
    to: companyEmail,
    subject: `Nová zpráva od ${name}`,
    text: message,
  };

  const emailToSender = {
    from: `"KMWS s. r. o." <${companyEmail}>`,
    to: email,
    subject: 'Děkujeme za vaši zprávu – KMWS',
    text: `Dobrý den ${name},\n\nDěkujeme za kontaktování společnosti KMWS s. r. o.\nVaše zpráva byla přijata.\n\nZnění:\n${message}\n\nS pozdravem,\nKMWS tým`,
  };

  await transporter.sendMail(emailToCompany);
  await transporter.sendMail(emailToSender);
}
