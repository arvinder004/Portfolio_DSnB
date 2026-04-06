import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Capabilities" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let index = navItems.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(navItems[index].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[index].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-full border border-white/10 bg-background/75 px-4 backdrop-blur-xl sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-semibold tracking-tight text-foreground transition hover:text-primary"
          >
            Arvinder Singh Dhoul
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeSection === item.id
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="outline" size="sm" className="border-white/10 bg-white/5" asChild>
              <a
                href="https://drive.google.com/file/d/19ryfKndqfSx0nNRMeVECkKJ-WB_7-Ik7/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-muted-foreground transition hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-white/10 py-3 md:hidden">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full rounded-2xl px-4 py-3 text-left text-sm transition ${
                    activeSection === item.id
                      ? "bg-white/10 text-foreground"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button variant="outline" className="mt-2 w-full border-white/10 bg-white/5" asChild>
                <a
                  href="https://drive.google.com/file/d/19ryfKndqfSx0nNRMeVECkKJ-WB_7-Ik7/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navigation;
