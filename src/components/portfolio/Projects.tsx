import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, BarChart, Server, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction System",
      description: "End-to-end ML pipeline for predicting customer churn using advanced analytics and real-time scoring. Achieved 94% accuracy with Random Forest and deployed on AWS with auto-scaling.",
      icon: <Brain className="h-6 w-6" />,
      technologies: ["Python", "Scikit-learn", "AWS", "Docker", "PostgreSQL", "FastAPI"],
      category: "Data Science",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time prediction API",
        "Interactive dashboard",
        "Automated retraining pipeline",
        "A/B testing framework"
      ]
    },
    
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    {
      title: "Distributed Analytics Platform",
      description: "Scalable microservices architecture for processing large-scale analytics data. Handles 10M+ events per day with real-time streaming and batch processing capabilities.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "Apache Kafka", "Redis", "MongoDB", "Docker", "Kubernetes"],
      category: "Backend",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting"
      ]
    },
    
    {
      title: "Cloud Infrastructure Automation",
      description: "Complete DevOps solution for automated deployment and infrastructure management. Reduced deployment time by 80% with zero-downtime deployments and comprehensive monitoring.",
      icon: <Server className="h-6 w-6" />,
      technologies: ["Terraform", "Kubernetes", "AWS", "Jenkins", "Prometheus", "Grafana"],
      category: "DevOps",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Infrastructure as Code",
        "CI/CD pipelines",
        "Auto-scaling setup",
        "Security scanning"
      ]
    },
    {
      title: "Financial Risk Assessment API",
      description: "High-performance REST API for real-time financial risk calculation. Processes thousands of requests per second with sub-100ms response times and comprehensive risk metrics.",
      icon: <Database className="h-6 w-6" />,
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"],
      category: "Data Science",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time risk scoring",
        "Historical analysis",
        "Regulatory compliance",
        "API rate limiting"
      ]
    }
  ];

  const categoryColors = {
    "Data Science": "bg-blue-500/10 text-blue-500 border-blue-500/30",
    "Backend": "bg-green-500/10 text-green-500 border-green-500/30",
    "DevOps": "bg-purple-500/10 text-purple-500 border-purple-500/30"
  };

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-glow">Featured Projects</h2>
          <div className="relative inline-block">
            <p className="text-xl text-muted-foreground">
              A selection of projects showcasing my expertise in data science, backend development, and DevOps
            </p>
            <div className="absolute -inset-2 bg-gradient-accent opacity-10 blur-xl rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.slice(0, visibleCount).map((project, index) => (
            <Card 
              key={index} 
              className="glass-card group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 shadow-glow group-hover:shadow-intense transition-all duration-500">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${categoryColors[project.category as keyof typeof categoryColors]} group-hover:scale-105 transition-transform duration-300`}
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 magnetic-element">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>

                {/* Features with enhanced styling */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm flex items-center">
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    Key Features:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center group-hover:text-foreground transition-colors duration-300">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0 group-hover:shadow-glow transition-all duration-300"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies with hover effects */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/20 hover:scale-105 transition-all duration-300 magnetic-element"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 magnetic-element group/btn"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="hero"
                    className="magnetic-element group/btn"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {visibleCount < projects.length && (
          <div className="flex justify-center mt-10">
            <Button 
              size="lg" 
              variant="hero" 
              className="px-8"
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;