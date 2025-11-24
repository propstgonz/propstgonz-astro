import type { APIContext } from "astro";
const nodemailer = require("nodemailer");

// Your existing transporter
const transporter = nodemailer.createTransport({
  host: "mail.baronette.es",
  port: 587,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// API POST handler
export async function POST({ request }: APIContext) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Send email exactly as in Nodemailer documentation
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: "recipient@example.com", // replace with actual recipient
      subject: "New message from contact form",
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p>${message}</p>`,
    });

    return new Response(
      JSON.stringify({ ok: true, messageId: info.messageId }),
      { status: 200 }
    );
  } catch (err: any) {
    console.error(err);
    return new Response(
      JSON.stringify({ ok: false, error: err.message }),
      { status: 500 }
    );
  }
}
