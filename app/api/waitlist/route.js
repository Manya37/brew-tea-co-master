import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const company = String(body.company || "").trim();
    const sector = String(body.sector || "").trim();
    const email = String(body.email || "").trim();

    if (!company || !sector || !email) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const mailSubject = `[PureLeaf Waitlist] ${company}`;

    const text = [
      "New waitlist request",
      "",
      `Company: ${company}`,
      `Sector: ${sector}`,
      `Email: ${email}`,
    ].join("\n");

    const html = `
      <h2>New waitlist request</h2>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Sector:</strong> ${sector}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;

    await sendMail({
      subject: mailSubject,
      text,
      html,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Waitlist form error:", error);

    const isAuthError = error?.code === "EAUTH";
    const message =
      process.env.NODE_ENV === "development" && isAuthError
        ? "SMTP login failed. Check mailbox password in .env and restart the dev server."
        : "Unable to submit request right now. Please try again later.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
