type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const json = (status: number, body: Record<string, string>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });

export default async function handler(request: Request) {
  const method = request.method;
  const url = new URL(request.url);
  console.log(`[contact] ${method} ${url.pathname}`);

  if (method !== "POST") {
    console.warn(`[contact] Rejected: method not allowed (${method})`);
    return json(405, { error: "Method not allowed." });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "asdhoul004@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    console.error("[contact] Missing env vars — RESEND_API_KEY or CONTACT_FROM_EMAIL not set");
    return json(500, {
      error: "Email service is not configured. Please set RESEND_API_KEY and CONTACT_FROM_EMAIL.",
    });
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
    console.log(`[contact] Payload received — name="${payload.name}", email="${payload.email}", subject="${payload.subject}"`);
  } catch (err) {
    console.error("[contact] Failed to parse request body:", err);
    return json(400, { error: "Invalid request payload." });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const subject = payload.subject?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !subject || !message) {
    const missing = ["name", "email", "subject", "message"].filter(
      (k) => !payload[k as keyof ContactPayload]?.trim()
    );
    console.warn(`[contact] Validation failed — missing fields: ${missing.join(", ")}`);
    return json(400, { error: "All fields are required." });
  }

  console.log(`[contact] Sending email via Resend — from="${fromEmail}", to="${toEmail}", subject="Portfolio contact: ${subject}"`);

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

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error(`[contact] Resend API error — status=${resendResponse.status}, body=${errorText}`);
      return json(502, {
        error: `Resend request failed: ${errorText || resendResponse.statusText}`,
      });
    }

    console.log(`[contact] Email sent successfully to "${toEmail}"`);
    return json(200, { message: "Message sent successfully." });

  } catch (err) {
    console.error("[contact] Unexpected error while calling Resend API:", err);
    return json(500, {
      error: err instanceof Error ? err.message : "Unable to send the message right now. Please try again shortly.",
    });
  }
}
