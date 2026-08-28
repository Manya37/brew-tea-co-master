import nodemailer from "nodemailer";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env") });

const user = process.env.SMTP_USER?.trim();
const pass = process.env.SMTP_PASS?.trim();
const host = process.env.SMTP_HOST?.trim() || "smtp.hostinger.com";

if (!user || !pass) {
  console.error("FAIL: Missing SMTP_USER or SMTP_PASS in .env");
  process.exit(1);
}

console.log(`Testing SMTP for ${user} via ${host}...`);

const attempts = [
  { port: 465, secure: true, label: "465 SSL" },
  { port: 587, secure: false, requireTLS: true, label: "587 STARTTLS" },
];

for (const attempt of attempts) {
  const transporter = nodemailer.createTransport({
    host,
    port: attempt.port,
    secure: attempt.secure,
    requireTLS: attempt.requireTLS,
    auth: { user, pass },
  });

  try {
    await transporter.verify();
    console.log(`OK: Auth works on port ${attempt.label}`);

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || user,
      to: process.env.CONTACT_TO_EMAIL || user,
      subject: "[PureLeaf Test] SMTP connection test",
      text: "This is a test email from your local dev environment. Forms are working.",
    });

    console.log(`OK: Test email sent — ${info.messageId}`);
    process.exit(0);
  } catch (error) {
    console.error(`FAIL (${attempt.label}):`, error.message);
  }
}

process.exit(1);
