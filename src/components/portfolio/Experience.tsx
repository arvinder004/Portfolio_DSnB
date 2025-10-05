import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Data Scientist",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      description: "Leading a team of 5 data scientists in developing ML models for customer analytics and business optimization. Implemented end-to-end ML pipelines that increased customer retention by 25%.",
      achievements: [
        "Built predictive models that improved customer lifetime value prediction by 40%",
        "Designed and implemented real-time recommendation engine serving 1M+ users",
        "Led migration from on-premise to cloud-based ML infrastructure",
        "Mentored junior data scientists and established ML best practices"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "Apache Spark", "PostgreSQL", "Docker"]
    },
    {
      company: "DataFlow Inc",
      position: "Backend Developer & ML Engineer",
      location: "New York, NY",
      duration: "2020 - 2022",
      type: "Full-time",
      description: "Developed scalable backend systems and ML models for fintech applications. Built high-performance APIs processing millions of transactions daily with 99.9% uptime.",
      achievements: [
        "Architected microservices handling 10M+ API calls per day",
        "Reduced system response time by 60% through optimization",
        "Implemented fraud detection model with 95% accuracy",
        "Established CI/CD pipelines reducing deployment time by 80%"
      ],
      technologies: ["Node.js", "Python", "Kubernetes", "MongoDB", "Redis", "Jenkins"]
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      location: "Austin, TX",
      duration: "2019 - 2020",
      type: "Full-time",
      description: "Early-stage startup role developing web applications and data analytics tools. Wore multiple hats including frontend, backend, and data analysis responsibilities.",
      achievements: [
        "Built complete web application from scratch using React and Node.js",
        "Developed analytics dashboard processing 100K+ daily events",
        "Implemented automated reporting system saving 20 hours/week",
        "Created data pipeline for real-time business metrics"
      ],
      technologies: ["React", "Node.js", "Express", "MySQL", "AWS", "Python"]
    },
    {
      company: "University Research Lab",
      position: "Data Science Intern",
      location: "Boston, MA",
      duration: "2018 - 2019",
      type: "Internship",
      description: "Research assistant working on machine learning projects for academic publications. Focused on natural language processing and computer vision applications.",
      achievements: [
        "Co-authored 2 research papers published in peer-reviewed journals",
        "Developed NLP model for sentiment analysis with 92% accuracy",
        "Created automated data collection and preprocessing pipelines",
        "Presented findings at 3 international conferences"
      ],
      technologies: ["Python", "scikit-learn", "NLTK", "OpenCV", "Jupyter", "TensorFlow"]
    }
  ];

  const typeColors = {
    "Full-time": "bg-green-500/10 text-green-500 border-green-500/30",
    "Internship": "bg-blue-500/10 text-blue-500 border-blue-500/30"
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-glow">Professional Experience</h2>
          <div className="relative inline-block">
            <p className="text-xl text-muted-foreground">
              My journey through data science, backend development, and DevOps roles
            </p>
            <div className="absolute -inset-2 bg-gradient-accent opacity-10 blur-xl rounded-lg"></div>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass-card hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.position}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={typeColors[exp.type as keyof typeof typeColors]}
                  >
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-medium mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-medium mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;