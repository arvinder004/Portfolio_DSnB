import { defineConfig, loadEnv, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const json = (statusCode: number, body: Record<string, string>) =>
  JSON.stringify({
    ...body,
    statusCode,
  });

const createContactPlugin = (env: Record<string, string>): Plugin => ({
  name: "contact-api-dev",
  configureServer(server) {
    server.middlewares.use("/api/contact", async (req, res) => {
      if (req.method !== "POST") {
        res.statusCode = 405;
        res.setHeader("Content-Type", "application/json");
        res.end(json(405, { error: "Method not allowed." }));
        return;
      }

      const resendApiKey = env.RESEND_API_KEY;
      const fromEmail = env.CONTACT_FROM_EMAIL;
      const toEmail = env.CONTACT_TO_EMAIL || "asdhoul004@gmail.com";

      if (!resendApiKey || !fromEmail) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(
          json(500, {
            error: "Email service is not configured. Please set RESEND_API_KEY and CONTACT_FROM_EMAIL.",
          })
        );
        return;
      }

      let rawBody = "";

      req.on("data", (chunk) => {
        rawBody += chunk;
      });

      req.on("end", async () => {
        let payload: ContactPayload;

        try {
          payload = JSON.parse(rawBody) as ContactPayload;
        } catch {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(json(400, { error: "Invalid request payload." }));
          return;
        }

        const name = payload.name?.trim();
        const email = payload.email?.trim();
        const subject = payload.subject?.trim();
        const message = payload.message?.trim();

        if (!name || !email || !subject || !message) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(json(400, { error: "All fields are required." }));
          return;
        }

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
            res.statusCode = 502;
            res.setHeader("Content-Type", "application/json");
            res.end(
              json(502, {
                error: `Resend request failed: ${errorText || resendResponse.statusText}`,
              })
            );
            return;
          }

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(json(200, { message: "Message sent successfully." }));
        } catch (error) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(
            json(500, {
              error:
                error instanceof Error
                  ? error.message
                  : "Unable to send the message right now. Please try again shortly.",
            })
          );
        }
      });
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    createContactPlugin(env),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  };
});
