import type { VercelRequest, VercelResponse } from "@vercel/node";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const method = req.method ?? "UNKNOWN";
  console.log(`[contact] ${method} ${req.url}`);

  if (method !== "POST") {
    console.warn(`[contact] Rejected: method not allowed (${method})`);
    return res.status(405).json({ error: "Method not allowed." });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "asdhoul004@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  console.log(
    `[contact] Env check — resendApiKey=${resendApiKey ? "set" : "MISSING"}, fromEmail=${fromEmail ?? "MISSING"}, toEmail=${toEmail}`
  );

  if (!resendApiKey || !fromEmail) {
    console.error("[contact] Missing env vars — RESEND_API_KEY or CONTACT_FROM_EMAIL not set");
    return res.status(500).json({
      error: "Email service is not configured. Please set RESEND_API_KEY and CONTACT_FROM_EMAIL.",
    });
  }

  const payload = req.body as ContactPayload;

  if (!payload || typeof payload !== "object") {
    console.error("[contact] Invalid or missing request body");
    return res.status(400).json({ error: "Invalid request payload." });
  }

  console.log(
    `[contact] Payload received — name="${payload.name}", email="${payload.email}", subject="${payload.subject}"`
  );

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const subject = payload.subject?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !subject || !message) {
    const missing = (["name", "email", "subject", "message"] as const).filter(
      (k) => !payload[k]?.trim()
    );
    console.warn(`[contact] Validation failed — missing fields: ${missing.join(", ")}`);
    return res.status(400).json({ error: "All fields are required." });
  }

  console.log(
    `[contact] Sending email via Resend — from="${fromEmail}", to="${toEmail}", subject="Portfolio contact: ${subject}"`
  );

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Portfolio contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    const responseText = await resendResponse.text();
    console.log(`[contact] Resend response — status=${resendResponse.status}, body=${responseText}`);

    if (!resendResponse.ok) {
      console.error(`[contact] Resend API error — status=${resendResponse.status}, body=${responseText}`);
      return res.status(502).json({
        error: `Resend request failed: ${responseText || resendResponse.statusText}`,
      });
    }

    console.log(`[contact] Email sent successfully to "${toEmail}"`);
    return res.status(200).json({ message: "Message sent successfully." });

  } catch (err) {
    console.error("[contact] Unexpected error while calling Resend API:", err);
    return res.status(500).json({
      error: err instanceof Error ? err.message : "Unable to send the message right now. Please try again shortly.",
    });
  }
}
