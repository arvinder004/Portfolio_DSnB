import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com/arvinder004", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arvinder004/", icon: Linkedin },
  { label: "Email", href: "mailto:asdhoul004@gmail.com", icon: Mail },
];

const Footer = () => {
  return (
    <footer className="px-4 pb-10 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold text-foreground">Arvinder Singh Dhoul</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            AI engineer and full-stack builder focused on LLM systems, product delivery, and
            dependable backend workflows.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? "_self" : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/30 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/30 hover:text-foreground"
          >
            Top
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
