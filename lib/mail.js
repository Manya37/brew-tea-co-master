import nodemailer from "nodemailer";

function env(name) {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

function getSmtpConfig() {
  const host = env("SMTP_HOST");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");

  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
  }

  const port = Number(env("SMTP_PORT") || 465);

  return {
    host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user, pass },
  };
}

export async function sendMail({ subject, text, html, replyTo }) {
  const from = env("SMTP_FROM") || env("SMTP_USER");
  const to = env("CONTACT_TO_EMAIL") || env("SMTP_USER");

  const transporter = nodemailer.createTransport(getSmtpConfig());

  await transporter.sendMail({
    from,
    to,
    replyTo,
    subject,
    text,
    html,
  });
}
