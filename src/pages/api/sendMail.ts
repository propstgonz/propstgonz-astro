import type { APIContext } from "astro";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS);

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "mail.baronette.es",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST({ request }: APIContext) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const file = formData.get("file");

    const attachments = [];
    if (file && typeof file !== "string") {
      const buffer = Buffer.from(await file.arrayBuffer());
      if (buffer.length > 25 * 1024 * 1024) {
        return new Response(
          JSON.stringify({ ok: false, error: "Your file exceeds 25MB" }),
          { status: 400 }
        );
      }

      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type,
      });
    }

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: "propstgonz@baronette.es",
      subject: "Nuevo mensaje desde el portafolio",
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
      attachments,
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
