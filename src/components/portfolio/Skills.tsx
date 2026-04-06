import { BarChart3, Brain, Cloud, Database, Server } from "lucide-react";

const categories = [
  {
    title: "Agentic AI and LLMs",
    summary: "Building RAG systems, prompt pipelines, multi-agent workflows, and grounded AI experiences.",
    icon: Brain,
    skills: ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "Multi-Agent Orchestration", "Pydantic"],
  },
  {
    title: "Backend engineering",
    summary: "API design and service architecture for AI features, dashboards, and production web platforms.",
    icon: Server,
    skills: ["Python", "FastAPI", "Node.js", "Next.js", "SQL", "MongoDB", "Docker"],
  },
  {
    title: "Machine learning",
    summary: "Hands-on experience across classical ML, deep learning, NLP, computer vision, and evaluation workflows.",
    icon: Cloud,
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "NLP", "Computer Vision", "Model Evaluation"],
  },
  {
    title: "MLOps and experimentation",
    summary: "Structured pipelines, experiment tracking, and modular project setups that keep iteration manageable.",
    icon: Database,
    skills: ["Experiment Tracking", "Modular Pipelines", "Evaluation Workflows", "Deployment", "Git", "AsyncIO"],
  },
];

const capabilityBands = [
  {
    title: "Languages and frameworks",
    items: ["Python", "JavaScript", "Next.js", "Node.js", "FastAPI", "Streamlit", "MongoDB"],
  },
  {
    title: "AI and data workflow",
    items: ["RAG pipelines", "Prompt optimization", "Typed validation", "NLP", "Computer vision", "Structured evaluation"],
  },
  {
    title: "Platform and delivery",
    items: ["Containers", "Production deployments", "Admin dashboards", "Grounding strategies", "Performance optimization"],
  },
];

const Skills = () => {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl">
        <div className="section-panel">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="section-kicker">Capabilities</span>
            <h2 className="mt-6 text-4xl font-bold sm:text-5xl">Breadth across the stack, depth where delivery gets difficult.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              My recent work centers on LLM systems and AI products, but it’s backed by broader ML,
              backend, and deployment experience so the final output is not just impressive in a
              demo, but stable in use.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {categories.map(({ title, summary, skills, icon: Icon }) => (
              <article key={title} className="glass-card p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{summary}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {capabilityBands.map((band, index) => (
              <div
                key={band.title}
                className="rounded-[1.5rem] border border-white/10 bg-background/40 p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  <h3 className="text-lg font-semibold">{band.title}</h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {band.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
