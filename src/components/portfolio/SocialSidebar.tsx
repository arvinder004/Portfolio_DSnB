import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileText, Instagram } from "lucide-react";
import { socials, meta } from "@/data/portfolioData";

const links = [
  {
    label: "GitHub",
    href: socials.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: socials.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${socials.email}`,
    icon: Mail,
  },
  {
    label: "Resume",
    href: meta.resumeUrl,
    icon: FileText,
  },
  {
    label: "Instagram",
    href: socials.instagram,
    icon: Instagram,
  },
];

const SocialSidebar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade in after a short delay so it doesn't flash on initial load
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1 xl:flex transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Top line */}
      <div className="h-16 w-px bg-gradient-to-b from-transparent to-white/20" />

      {/* Icon buttons */}
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-background/60 px-2 py-3 backdrop-blur-xl">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? "_self" : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="group relative flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
          >
            <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />

            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg border border-white/10 bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-150 group-hover:opacity-100">
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* Bottom line */}
      <div className="h-16 w-px bg-gradient-to-t from-transparent to-white/20" />
    </div>
  );
};

export default SocialSidebar;
