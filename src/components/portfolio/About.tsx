import { BarChart3, Cloud, Database, Server } from "lucide-react";

const pillars = [
  {
    title: "LLM applications",
    description: "RAG pipelines, agent workflows, and evaluation loops built for dependable outputs.",
    icon: Database,
  },
  {
    title: "Backend systems",
    description: "Python and Node services designed to support product features, persistence, and scale.",
    icon: Server,
  },
  {
    title: "Product delivery",
    description: "From freelance client websites to internal AI tools, I like taking ideas to live deployment.",
    icon: Cloud,
  },
  {
    title: "Research mindset",
    description: "Comfortable comparing models, publishing findings, and validating ideas with evidence.",
    icon: BarChart3,
  },
];

const About = () => {
  return (
    <section className="section-shell">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="section-kicker">About</span>
          <h2 className="mt-6 text-4xl font-bold sm:text-5xl">A builder who likes the product, the model, and the infrastructure behind both.</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I’m currently finishing my Bachelor of Technology in Computer Science and Business Systems
            at Gyan Ganga Institute of Technology & Sciences. My recent work has moved strongly
            toward LLM applications, RAG systems, and full-stack AI products that need both strong
            engineering and clear user-facing outcomes.
          </p>
        </div>

        <div className="section-grid">
          <div className="section-panel animate-fade-in-left lg:col-span-5">
            <p className="eyebrow-line">Approach</p>
            <div className="mt-6 space-y-6 text-base leading-8 text-muted-foreground">
              <p>
                I like projects where the hard part is not just getting a model to work, but
                getting it to behave reliably in a real product. That includes prompt design,
                grounding strategies, typed validation, persistent state, and backend architecture
                that supports iteration instead of fighting it.
              </p>
              <p>
                Alongside internships and freelance work, I’ve also contributed to research around
                face detection systems and generative AI-powered collaborative robotics, which keeps
                my engineering work anchored in experimentation and comparison rather than hype.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["LangChain", "LangGraph", "Next.js", "Node.js", "MongoDB", "Docker"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 animate-fade-in-right sm:grid-cols-2 lg:col-span-7">
            {pillars.map(({ title, description, icon: Icon }) => (
              <article key={title} className="glass-card p-6">
                <div className="inline-flex rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
