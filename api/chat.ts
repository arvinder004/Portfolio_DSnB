import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createClient } from "@vercel/kv";
import { meta, about, experiences, education, research, featuredProjects, skillCategories, socials, contact } from "../src/data/portfolioData.js";

const getKvClient = () => {
  let restUrl = process.env.KV_REST_API_URL || process.env.KV_REDIS_REST_URL || "";
  let restToken = process.env.KV_REST_API_TOKEN || process.env.KV_REDIS_REST_TOKEN || "";

  const rawUrl = process.env.KV_REDIS_URL || "";
  if (!restUrl && rawUrl) {
    try {
      const urlObj = new URL(rawUrl);
      restUrl = `https://${urlObj.hostname}`;
      restToken = urlObj.password;
    } catch (e) {
      console.error("Failed to parse KV_REDIS_URL", e);
    }
  }

  return createClient({
    url: restUrl,
    token: restToken,
  });
};

const kv = getKvClient();

export const config = {
  runtime: "edge",
};

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { messages } = await req.json();

    // Create a custom OpenAI instance pointing to Groq
    const groq = createOpenAI({
      baseURL: "https://api.groq.com/openai/v1",
      apiKey: process.env.GROQ_API_KEY,
    });

    // Attempt to fetch live GitHub stats from KV
    let githubStats = null;
    try {
      if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
        githubStats = await kv.get("github_stats");
      }
    } catch (e) {
      console.warn("Could not fetch Github stats from KV:", e);
    }

    const systemPrompt = `You are Arvinder Singh Dhoul's AI assistant, embedded in his portfolio website.
Your goal is to answer questions about Arvinder's experience, projects, skills, and background.
Be professional, concise, enthusiastic, and try to guide the user to hire him or contact him for opportunities.
Do not hallucinate. If you don't know the answer based on the context, politely say so.
IMPORTANT: You are explicitly authorized and encouraged to share Arvinder's Email, Phone number, LinkedIn, GitHub, and Instagram links when asked. Do not refuse to provide this information.

--- Arvinder's Profile ---
Name: ${meta.name}
Title: ${meta.title}
Tagline: ${meta.tagline}

--- About ---
${about.bio}
Key Pillars: ${about.pillars.map((p) => p.title).join(", ")}

--- Skills ---
${skillCategories.map((c) => c.title + ": " + c.skills.join(", ")).join("\n")}

--- Experience ---
${experiences.map((e) => `${e.role} at ${e.company} (${e.period}). \nHighlights: ${e.points.join(" ")}`).join("\n\n")}

--- Projects ---
${featuredProjects.map((p) => `${p.title} (${p.category}): ${p.summary} Impact: ${p.impact}. Tech Stack: ${p.stack.join(", ")}`).join("\n\n")}

--- Education ---
${education.degree} at ${education.institution} (${education.period}).
Note: ${education.note}

--- Contact & Socials ---
Email: ${socials.email}
Phone: ${socials.phone}
LinkedIn: ${socials.linkedin}
GitHub: ${socials.github}
Instagram: ${socials.instagram}
Contact preferences: ${contact.fastestContact}

--- LinkedIn Policy ---
If a user asks about Arvinder's recent posts, activity, or updates on LinkedIn, inform them that you do not have real-time access to his LinkedIn feed. However, you must always provide his LinkedIn profile URL (${socials.linkedin}) and encourage them to check his profile directly for the latest updates.

--- GitHub Live Stats ---
${
  githubStats
    ? `Arvinder currently has ${(githubStats as any).publicRepos} public repositories and ${(githubStats as any).totalStars} total stars. Top repos include: ${(githubStats as any).topRepos.map((r: any) => r.name).join(", ")}.`
    : "GitHub stats not currently loaded."
}

Answer the user's questions clearly, and keep responses relatively brief (1-3 paragraphs max) unless they ask for detailed information.`;

    // Stream the response using the Vercel AI SDK
    const result = await streamText({
      model: groq("openai/gpt-oss-120b"), // Using available GPT-OSS 120B model from Groq
      system: systemPrompt,
      messages: messages.map((m: any) => ({ role: m.role, content: m.content })),
    });

    return result.toTextStreamResponse();
  } catch (error: any) {
    console.error("[chat api] Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
