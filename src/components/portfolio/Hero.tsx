import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Twitter, Sparkles, Youtube, Instagram } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 z-0">
        <img 
          src='/hero.jpg' 
          alt="Tech workspace background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full opacity-60 floating-element"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full opacity-40 floating-element-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary-glow rounded-full opacity-50 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-accent rounded-full opacity-30 floating-element"></div>
        <div className="absolute bottom-20 right-1/4 w-2.5 h-2.5 bg-primary rounded-full opacity-45 floating-element-delayed"></div>
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent text-glow">
            Arvinder Singh Dhoul
          </h1>
          <div className="relative mb-4">
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
              Data Scientist & Backend Developer
            </p>
            <div className="absolute -inset-2 bg-gradient-accent opacity-20 blur-xl rounded-lg"></div>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming data into insights and building scalable backend solutions 
            with expertise in DevOps and cloud infrastructure.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up stagger-1">
          <Button 
            size="lg" 
            variant="hero"
            onClick={scrollToProjects}
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </span>
          </Button>
          <a href="mailto:asdhoul004@gmail.com">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-glow transition-all duration-500 magnetic-element group"
            >
              <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              Get In Touch
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 animate-fade-in-up stagger-2">
          {[
            { href: "https://github.com/arvinder004", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/arvinder004/", icon: Linkedin, label: "LinkedIn" },
            { href: "https://x.com/arvinder004", icon: Twitter, label: "Twitter" },
            { href: "https://www.youtube.com/@cyber_gabru", icon: Youtube, label: "YouTube" },
            { href: "https://www.instagram.com/cyber_gabru", icon: Instagram, label: "Instagram" },
            { href: "mailto:asdhoul004@gmail.com", icon: Mail, label: "Email" }
          ].map(({ href, icon: Icon, label }, index) => (
            <a 
              key={label}
              href={href} 
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="group p-3 rounded-full bg-card/30 backdrop-blur-sm border border-border/30 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-500 hover:scale-125 hover:shadow-floating magnetic-element"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={label}
            >
              <Icon className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce-slow">
          <span className="text-xs text-muted-foreground font-medium">Scroll Down</span>
          <div className="p-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <ArrowDown className="h-4 w-4 text-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;