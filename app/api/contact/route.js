import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const firstName = String(body.firstName || "").trim();
    const lastName = String(body.lastName || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const fullName = `${firstName} ${lastName}`;
    const mailSubject = `[PureLeaf Contact] ${subject}`;

    const text = [
      "New contact form submission",
      "",
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Topic: ${subject}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Topic:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    await sendMail({
      subject: mailSubject,
      text,
      html,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    const isAuthError = error?.code === "EAUTH";
    const message =
      process.env.NODE_ENV === "development" && isAuthError
        ? "SMTP login failed. Check mailbox password in .env and restart the dev server."
        : "Unable to send message right now. Please try again later.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
