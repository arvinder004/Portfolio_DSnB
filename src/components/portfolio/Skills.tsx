import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Server, 
  Cloud, 
  Database, 
  Code, 
  BarChart3,
  Cpu,
  GitBranch,
  Layers,
  Shield,
  Zap,
  Workflow
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science & ML",
      icon: <Brain className="h-6 w-6" />,
      color: "from-blue-500 to-purple-600",
      skills: [
        "Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", 
        "PyTorch", "Statistical Analysis", "Data Visualization", 
        "Feature Engineering", "Model Deployment"
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      color: "from-green-500 to-teal-600",
      skills: [
        "Node.js", "Express.js", "FastAPI", "REST APIs", "GraphQL", 
        "Microservices", "Database Design", "API Security",
        "Performance Optimization", "WebSockets", "Message Queues"
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600",
      skills: [
        "Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", 
        "Infrastructure as Code", "Monitoring", "Logging",
        "Auto-scaling", "Load Balancing"
      ]
    },
    {
      title: "Databases & Tools",
      icon: <Database className="h-6 w-6" />,
      color: "from-orange-500 to-red-600",
      skills: [
        "PostgreSQL", "MongoDB", "Git", "Jupyter", "Apache Spark", "Data Pipelines",
        "ETL Processes", "Query Optimization"
      ]
    }
  ];

  const expertiseAreas = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Programming Languages",
      items: ["Python", "JavaScript", "TypeScript", "C++", "SQL"]
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Frameworks & Libraries",
      items: ["React.js", "Node.js", "Express", "FastAPI", "Django", "Flask", "Next.js"]
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Machine Learning",
      items: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "NLP", "Computer Vision", "MLOps", "Transformers", "Generative AI"]
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Development Tools",
      items: ["Git", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"]
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Analytics & BI",
      items: ["Power BI", "Kafka", "Snowflake"]
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Security & Best Practices",
      items: ["API Security", "OAuth", "JWT", "HTTPS", "Data Privacy", "GDPR"]
    }
  ];

  const technologies = [
    "Python", "JavaScript", "TypeScript", "SQL", "R", "C++",
    "React", "Node.js", "Express", "FastAPI", "Django", "Flask",
    "PostgreSQL", "MongoDB", "Redis", "Elasticsearch",
    "Docker", "Kubernetes", "AWS", "GCP", "Azure",
    "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Kafka",
    "Git", "Jenkins", "GitHub Actions", "Terraform", "Ansible"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">
            A comprehensive skill set spanning data science, backend development, and DevOps
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="glass-card group relative overflow-hidden animate-fade-in-up" 
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-glow group-hover:shadow-intense group-hover:scale-110 transition-all duration-500`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 magnetic-element">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:scale-105 hover:bg-primary/20 hover:shadow-glow transition-all duration-300 magnetic-element"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expertise Areas Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 animate-fade-in-up">
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <Card 
                key={index} 
                className="glass-card hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">
                      {area.icon}
                    </div>
                    <h4 className="font-semibold text-sm">{area.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {area.items.map((item, itemIndex) => (
                      <Badge 
                        key={itemIndex} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 hover:border-primary transition-colors duration-300"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Technologies */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;