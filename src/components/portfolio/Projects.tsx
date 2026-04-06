import { Bot, Brain, ExternalLink, Github, Layers3, Server, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  summary: string;
  category: string;
  impact: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: typeof Brain;
};

const featuredProjects: Project[] = [
  {
    title: "Autonomous Recruitment Assistant",
    summary:
      "An automated multi-stage technical interview assistant that uses LLM evaluation pipelines to guide candidate screening.",
    category: "Agentic AI",
    impact: "Introduced structured candidate scoring, persistent progress tracking, HR-ready exports, and real-time session monitoring.",
    stack: ["LangChain", "Streamlit", "MongoDB", "LLM evaluation"],
    icon: Bot,
  },
  {
    title: "Multi-Agent Content Generation System",
    summary:
      "A LangGraph workflow that transforms raw product data into validated structured JSON pages through coordinated agents.",
    category: "Multi-agent workflow",
    impact: "Reduced malformed LLM outputs by 90% using typed validation with Pydantic plus structured logging and node-level monitoring.",
    stack: ["LangGraph", "Pydantic", "AsyncIO", "Structured logging"],
    icon: Layers3,
  },
  {
    title: "Customer Retention & Churn Risk Dashboard",
    summary:
      "A full-stack decision-support experience that turns churn predictions into retention actions and CLV-oriented recommendations.",
    category: "Data product",
    impact: "Combined XGBoost modeling, business simulation, and a lightweight app layer for actionable customer strategy.",
    stack: ["Python", "XGBoost", "FastAPI", "Streamlit"],
    githubUrl: "https://github.com/arvinder004/Customer-Retention-Churn-Risk-Dashboard",
    liveUrl: "https://customer-retention-churn-risk-dashboard.streamlit.app/",
    icon: Brain,
  },
  {
    title: "Simple Task Management System",
    summary:
      "A secure MERN application with role-aware dashboards and authentication flows designed around backend discipline.",
    category: "Full stack",
    impact: "Highlights practical API design, JWT-based access control, and product-minded CRUD architecture.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/arvinder004/Simple-Task-Managment-System",
    liveUrl: "https://simple-task-mgmt.netlify.app/",
    icon: Server,
  },
];

const archiveProjects = [
  "Student Exam Performance Predictor",
  "Telecom Customer Churn Prediction Model",
  "Smart Resume Analyzer",
  "Face Recognition Attendance System",
  "Multilingual Video Dubbing Tool",
  "Cue Sports Scorekeeper",
  "BlackBoard Tool",
  "Define-It",
  "Weather App",
  "Arduino-Based Solar Tracking System",
];

const Projects = () => {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl">
        <div className="animate-fade-in-up">
          <span className="section-kicker">Selected work</span>
          <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold sm:text-5xl">Projects shaped around outcomes, not just experiments.</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                A mix of ML applications, dashboards, product builds, and systems work that show
                how I think from prototype through deployment.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-muted-foreground">
              <span className="block font-semibold text-foreground">Recent work now leans toward Agentic AI, RAG, and production apps</span>
              <span className="mt-1 block">Featured projects reflect the strongest overlap between LLM systems, ML, and product engineering.</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6">
          {featuredProjects.map(({ title, summary, category, impact, stack, githubUrl, liveUrl, icon: Icon }, index) => (
            <article
              key={title}
              className="glass-card grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex flex-col justify-between gap-5">
                <div>
                  <div className="inline-flex rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-sm uppercase tracking-[0.22em] text-accent">{category}</p>
                  <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6">
                <div>
                  <p className="text-base leading-8 text-muted-foreground">{summary}</p>
                  <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-background/50 p-5">
                    <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      <Sparkles className="h-4 w-4" />
                      What stands out
                    </div>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {githubUrl ? (
                    <Button variant="outline" className="border-white/15 bg-white/5" asChild>
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Source
                      </a>
                    </Button>
                  ) : null}
                  {liveUrl ? (
                    <Button variant="hero" asChild>
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live demo
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="eyebrow-line">Project archive</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {archiveProjects.map((project) => (
              <div
                key={project}
                className="rounded-2xl border border-white/10 bg-background/40 px-4 py-4 text-sm text-muted-foreground transition hover:border-primary/30 hover:text-foreground"
              >
                {project}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
