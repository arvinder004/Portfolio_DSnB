import { Bot, Brain, ExternalLink, Github, Layers3, Server, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { archiveProjects, featuredProjects } from "@/data/portfolioData";

const iconMap = { Bot, Brain, Layers3, Server } as const;
type IconKey = keyof typeof iconMap;

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
          {featuredProjects.map(({ title, summary, category, impact, stack, githubUrl, liveUrl, iconKey }, index) => {
            const Icon = iconMap[iconKey as IconKey] ?? Bot;
            return (
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
            );
          })}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="eyebrow-line">Project archive</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {archiveProjects.map((project) => (
              <a
                key={project.title}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-background/40 px-4 py-4 text-sm text-muted-foreground transition hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
              >
                <span>{project.title}</span>
                <Github className="h-3.5 w-3.5 flex-shrink-0 opacity-40 transition group-hover:opacity-100 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
