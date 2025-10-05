import React from 'react';
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Code, Database, Server, BarChart, Cloud } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Science",
      description: "Machine learning, statistical analysis, and predictive modeling"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Scalable APIs, microservices, and database architecture"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "DevOps",
      description: "Cloud infrastructure, CI/CD pipelines, and containerization"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics",
      description: "Business intelligence, data visualization, and insights"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-glow">About Me</h2>
          <div className="relative inline-block">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about leveraging data and technology to solve complex problems. 
              With 3+ years of experience in data science and backend development, 
              I bring a unique blend of analytical thinking and technical expertise.
            </p>
            <div className="absolute -inset-2 bg-gradient-accent opacity-10 blur-xl rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6">
              Started as a curious computer science student fascinated by the intersection of mathematics 
              and programming. Over the years, I've evolved into a full-stack data professional who thrives 
              on transforming raw data into actionable insights and building robust systems that scale.
            </p>
            <p className="text-muted-foreground mb-6">
              My expertise spans the entire data pipeline - from data collection and processing to 
              machine learning model deployment and infrastructure management. I believe in writing 
              clean, maintainable code and following best practices in software development.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">AWS</Badge>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-right">
          {highlights.map((item, index) => (
            <Card key={index} className="glass-card group relative overflow-hidden animate-fade-in-right">
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 shadow-glow group-hover:shadow-intense transition-all duration-500 inline-block mb-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;