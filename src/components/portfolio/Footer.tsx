import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/arvinder004",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/arvinder004/",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/arvinder004",
      label: "Twitter"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:asdhoul004@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        {/* Back to Top Button */}
        <div className="flex justify-center mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Brand & Description */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Arvinder Singh Dhoul
            </h3>
            <p className="text-muted-foreground text-sm">
              Data Scientist & Backend Developer passionate about turning data into insights
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-primary/10"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright & Credits */}
          <div className="text-center lg:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center lg:justify-end gap-1">
              © 2024 Arvinder Singh. Made with <Heart className="h-4 w-4 text-red-500" /> and React
            </p>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 animated-underline">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 animated-underline">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 animated-underline">
                Sitemap
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Last updated: September 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;