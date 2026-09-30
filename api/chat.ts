import { createOpenAI } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages } from "ai";
import { kv } from "@vercel/kv";
import { meta, about, experiences, education, research, featuredProjects, skillCategories } from "../src/data/portfolioData";

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
${education.degree} at ${education.school} (${education.period}).
Relevant Coursework: ${education.coursework.join(", ")}

--- GitHub Live Stats ---
${
  githubStats
    ? `Arvinder currently has ${(githubStats as any).publicRepos} public repositories and ${(githubStats as any).totalStars} total stars. Top repos include: ${(githubStats as any).topRepos.map((r: any) => r.name).join(", ")}.`
    : "GitHub stats not currently loaded."
}

Answer the user's questions clearly, and keep responses relatively brief (1-3 paragraphs max) unless they ask for detailed information.`;

    // Stream the response using the Vercel AI SDK
    const result = await streamText({
      model: groq("llama3-8b-8192"), // Using Groq's fast Llama 3 model
      system: systemPrompt,
      messages: convertToCoreMessages(messages),
    });

    return result.toDataStreamResponse();
  } catch (error: any) {
    console.error("[chat api] Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
