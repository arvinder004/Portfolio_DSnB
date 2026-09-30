import { BarChart3, Cloud, Database, Server } from "lucide-react";

import { about } from "@/data/portfolioData";

const iconMap = { Database, Server, Cloud, BarChart3 } as const;
type IconKey = keyof typeof iconMap;

const About = () => {
  return (
    <section className="section-shell">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="section-kicker">About</span>
          <h2 className="mt-6 text-4xl font-bold sm:text-5xl">{about.headline}</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {about.bio[0]}
          </p>
        </div>

        <div className="section-grid">
          <div className="section-panel animate-fade-in-left lg:col-span-5">
            <p className="eyebrow-line">Approach</p>
            <div className="mt-6 space-y-6 text-base leading-8 text-muted-foreground">
              {about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {about.tags.map((tag) => (
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
            {about.pillars.map(({ title, description, iconKey }) => {
              const Icon = iconMap[iconKey as IconKey];
              return (
                <article key={title} className="glass-card p-6">
                  <div className="inline-flex rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
