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
  if (request.method !== "POST") {
    return json(405, { error: "Method not allowed." });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "asdhoul004@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return json(500, {
      error: "Email service is not configured. Please set RESEND_API_KEY and CONTACT_FROM_EMAIL.",
    });
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return json(400, { error: "Invalid request payload." });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const subject = payload.subject?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !subject || !message) {
    return json(400, { error: "All fields are required." });
  }

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
    return json(502, {
      error: `Resend request failed: ${errorText || resendResponse.statusText}`,
    });
  }

  return json(200, { message: "Message sent successfully." });
}
