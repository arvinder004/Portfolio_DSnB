import { ArrowDownRight, Download, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { hero, meta, socials as socialsData } from "@/data/portfolioData";

const socialsWithIcons = [
  { href: `https://github.com/${socialsData.github.split("/").pop()}`, label: "GitHub", icon: Github },
  { href: socialsData.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${socialsData.email}`, label: "Email", icon: Mail },
];

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="animate-fade-in-up">
          <span className="section-kicker">{meta.tagline}</span>
          <div className="mt-8 max-w-4xl">
            <p className="eyebrow-line">{hero.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-bold leading-[0.96] text-glow sm:text-6xl lg:text-7xl">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {hero.subheadline}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {hero.focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/90"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" variant="hero" onClick={scrollToProjects} className="h-12 px-7">
              View selected work
              <ArrowDownRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 border-white/15 bg-white/5 px-7" asChild>
              <a href={meta.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {socialsWithIcons.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? "_self" : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="magnetic-element inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-right">
          <div className="gradient-stroke glass-card p-5 sm:p-6">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
              <img
                src="/hero.jpg"
                alt="Workspace with laptop and code on screen"
                className="h-[260px] w-full object-cover object-center opacity-80 sm:h-[320px]"
              />
            </div>

            <div className="mt-5 grid gap-4">
              {hero.stats.map((item) => (
                <div key={item.label} className="metric-card">
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
