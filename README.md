# Arvinder Singh Dhoul - AI Engineer Portfolio

A modern, high-performance, and AI-integrated portfolio website for Arvinder Singh Dhoul, built with cutting-edge web technologies and designed with a premium Architectural (Slate & Terracotta) theme.

## 🚀 Features

- **AI-Powered Global Chat**: An interactive AI assistant powered by Groq and the Vercel AI SDK, utilizing a custom system prompt built from the portfolio's data. It can answer questions about experience, projects, skills, and contact information.
- **Architectural UI Design**: A bespoke, highly-polished theme built with Tailwind CSS. It avoids typical "glassmorphism" tropes in favor of a unique Slate & Rust palette, snappy spring-based micro-interactions, and asymmetric layouts.
- **Single Source of Truth**: All portfolio content (experience, projects, skills, bio) is managed centrally in `src/data/portfolioData.ts`, making updates seamless.
- **Dynamic Contact Form**: Integrated with Resend API for reliable, direct-to-inbox email delivery.
- **Markdown Chat Support**: The AI chat supports rich markdown formatting and tables via `react-markdown` and `remark-gfm`.

## 🛠 Tech Stack

- **Frontend**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI, Framer Motion
- **AI Integration**: Vercel AI SDK, Groq (`openai/gpt-oss-120b`)
- **Backend/API**: Vercel Edge Functions (`api/chat.ts`)
- **Data/State**: React Query, Vercel KV (for live GitHub stats)
- **Deployment**: Vercel

## 💻 Getting Started Locally

Because this project utilizes **Vercel Serverless Edge Functions** for the AI Chat API, you must use the Vercel CLI to run the local development server properly. 

### Prerequisites
- Node.js 18+
- [Vercel CLI](https://vercel.com/docs/cli) (`npm i -g vercel`)

### Setup Instructions

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Set up your environment variables. Create a `.env` file in the root directory:
   ```env
   # Required for AI Chat
   GROQ_API_KEY=your_groq_api_key

   # Required for Contact Form
   RESEND_API_KEY=your_resend_api_key
   CONTACT_FROM_EMAIL=your_verified_resend_domain_email
   CONTACT_TO_EMAIL=your_personal_email

   # Optional: Vercel KV for GitHub Stats
   KV_REST_API_URL=...
   KV_REST_API_TOKEN=...
   ```

3. Start the local development environment using Vercel CLI:
   ```bash
   npx vercel dev
   ```
   *(Note: Do **not** use `npm run dev` if you want the `/api/chat` endpoint to function correctly, as Vite does not serve Vercel serverless functions natively).*

4. Open your browser to the local URL provided by Vercel (typically `http://localhost:3000`).

## 📁 Project Structure

- `/src/data/portfolioData.ts`: The central data hub for the entire site.
- `/src/components/portfolio`: All custom UI components, including the `GlobalChat` widget.
- `/src/pages/Index.tsx`: The main landing page layout.
- `/api/chat.ts`: The Vercel Edge function handling the AI streaming responses.
- `/src/index.css`: The core styling file containing the Architectural theme variables.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
