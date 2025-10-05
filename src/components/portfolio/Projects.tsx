import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Database,
  BarChart,
  Server,
  Brain,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sentiment Analysis",
      description:
        "This project is a deep learning-based sentiment analysis tool for classifying tweets as either positive or negative. It utilizes a Bidirectional LSTM (Long Short-Term Memory) model built with TensorFlow and Keras.",
      icon: <Brain className="h-6 w-6" />,
      technologies: ["Python", "Scikit-learn", "TensorFlow", "NLTK", "Pandas"],
      category: "NLP",
      githubUrl: "https://github.com/arvinder004/sentiment_analysis",
      features: [
        "Bidirectional LSTM model for high accuracy",
        "Real-time tweet sentiment classification",
        "Advanced text preprocessing and cleaning",
        "Built with TensorFlow and Keras",
      ],
    },
    {
      title: "Smart Resume Analyzer",
      description:
        "Spearheaded a cutting-edge Python-based Resume Analyzer using NLTK, Spacy, and Sentence-BERT, achieving 95% accuracy in matching resumes to job descriptions via NLP. Amplified text preprocessing with TF-IDF, extracting key insights and quantifying semantic alignment, enhancing candidate-job fit evaluation by 40%. Engineered a dynamic suggestion engine, improving resume-job alignment by 25% for optimized hiring outcomes.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["NLTK", "spaCy", "Transformers", "BERT"],
      category: "Machine Learning & NLP",
      githubUrl: "https://github.com/arvinder004/Resume_Analyzer",
      features: [
        "NLP-powered resume-job matching with 95% accuracy",
        "Semantic similarity analysis using Sentence-BERT",
        "Keyword extraction with TF-IDF for key insights",
        "Dynamic suggestion engine to improve resume alignment",
      ],
    },
    {
      title: "Face Recognition Attendance System",
      description:
        "Pioneered an AI-powered attendance system using OpenCV and KNN, achieving 98% accurate face recognition from PKL-stored profiles for precise in/out time logging via camera input. Seamlessly integrated Haar Cascade Classifier for face detection, logging 100+ daily work hours into CSV files. Boosted workplace efficiency by 30% through automation of routine tracking, deploying scalable AI-driven solutions.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["OpenCV", "Python"],
      category: "Machine Learning",
      githubUrl:
        "https://github.com/arvinder004/face-recognition-based-attendance-system",
      liveUrl:
        "https://www.linkedin.com/feed/update/urn:li:activity:7319757909666488320/",
      features: [
        "AI-powered attendance with 98% accuracy using OpenCV & KNN",
        "Real-time face recognition for in/out time logging",
        "Automated work hour tracking with CSV export",
        "Haar Cascade Classifier for robust face detection",
      ],
    },
    {
      title: "Text-to-Image Tool",
      description:
        "Synthesized images from textual prompts, integrating cutting-edge Hugging Face and Stable Diffusion models. Enabled generative AI powered image creation through text descriptions.",
      icon: '<BarChart className="h-6 w-6" />',
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "OpenCV",
        "Stable Diffusion",
        "Transformers",
        "Generative AI",
      ],
      category: "Machine Learning",
      githubUrl: "https://github.com/arvinder004/Text-to-image-tool",
      features: [
        "Generates high-resolution images from custom text prompts (Prompt-to-Image).",
        "Integrates Stable Diffusion via Hugging Face Transformers for synthesis.",
        "Allows user control over generation parameters (e.g., aspect ratio, negative prompts).",
        "Functionality to save synthesized images locally.",
      ],
    },
    {
      title: "E-Commerce Sales Dashboard",
      description:
        "I developed an interactive Power BI dashboard for an e-commerce dataset, integrating sales transactions and customer demographics. The project involved data cleaning, creating visualizations like bar charts for revenue trends, heatmaps for product performance, and dynamic slicers. This enhanced my skills in data visualization, demonstrating how business intelligence tools can optimize retail strategies.",
      icon: '<BarChart className="h-6 w-6" />',
      technologies: ["PowerBI"],
      category: "Data Visualization",
      liveUrl:
        "https://www.linkedin.com/feed/update/urn:li:activity:7314490952553799680?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3Bi28tvkZAS6SuNQ5DbW%2FwUg%3D%3D",
      features: [
        "Displays interactive sales and revenue trends using charts and graphs.",
        "Uses dynamic slicers to filter data by customer and product demographics.",
        "Features heatmaps for quickly identifying product performance.",
        "Involved comprehensive data cleaning and modeling within Power BI.",
      ],
    },
    {
      title: "Student Performance Analytics Dashboard",
      description:
        "I built a Power BI dashboard analyzing student academic records, including grades, attendance, and extracurricular data. It featured KPI metrics for dropout risks, line graphs for performance trends, and demographic drill-downs. This project refined my ability to handle educational datasets, emphasizing predictive analytics for institutional decision-making.",
      icon: '<BarChart className="h-6 w-6" />',
      technologies: ["Power BI"],
      category: "Data Visualization",
      liveUrl:
        "https://www.linkedin.com/feed/update/urn:li:activity:7314490952553799680?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3Bi28tvkZAS6SuNQ5DbW%2FwUg%3D%3D",
      features: [
        "Features KPI metrics to identify student dropout risks.",
        "Uses line graphs to track academic performance and attendance trends.",
        "Allows demographic drill-throughs for granular data analysis.",
        "Visualizes the correlation between student attendance and final grades.",
      ],
    },
    {
      title: "Multilingual Video Dubbing Tool",
      description:
        "Automated multilingual video dubbing, transcending language barriers and reducing translation time by 50% for 5+ Indian languages. Orchestrated real-time dubbing with over 95% accuracy by integrating Google Translate API and SpeechRecognition.",
      icon: '<BarChart className="h-6 w-6" />',
      technologies: ["Python", "Speech Recognition"],
      category: "NLP",
      githubUrl: "https://github.com/arvinder004/Video-Dubbing-Web-App",
      features: [
        "Achieved 95%+ accuracy in real-time multilingual dubbing.",
        "Reduced translation time by 50% for 5+ Indian languages.",
        "Uses SpeechRecognition for automated Speech-to-Text transcription.",
        "Integrates Google Translate API for translation and voice synthesis.",
      ],
    },
    {
      title: "BlackBoard Tool",
      description:
        "Engineered a high-performance real-time collaborative whiteboard. Streamlined workflows with a robust undo/redo architecture, enhancing user efficiency by 20%. Delivered a one-click reset feature, accelerating task completion by 25% and elevating user experience.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["React.js", "TailwindCSS"],
      category: "Frontend",
      githubUrl: "https://github.com/arvinder004/ArviDraw",
      liveUrl: "https://arvidraw.netlify.app/",
      features: [
        "Real-time event streaming",
        "Batch processing pipeline",
        "RESTful APIs",
        "Monitoring & alerting",
      ],
    },
    {
      title: "Cue Sports Scorekeeper",
      description:
        "A dynamic website crafted with Next.js to effortlessly track scores for snooker and century games! Perfect for solo players and teams alike, it simplifies scorekeeping and stats analysis.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Next.js"],
      category: "Full Stack",
      githubUrl: "https://github.com/arvinder004/CueSports",
      liveUrl: "https://cuesports.netlify.app/",
      features: [
        "Real-time score tracking for snooker & century games",
        "Support for both solo and team matches",
        "Detailed player statistics and performance analysis",
        "User-friendly interface for easy score input",
      ],
    },
    {
      title: "Weather App",
      description:
        "Developed a platform to know the weather details of various cities around the world",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "React.js"],
      category: "Full Stack",
      githubUrl: "https://github.com/arvinder004/WeatherApp",
      liveUrl: "https://weather-app-arvi.netlify.app/",
      features: [
        "Real-time weather data for any city",
        "5-day weather forecast display",
        "Shows humidity, wind speed, and conditions",
        "Responsive design for mobile and desktop",
      ],
    },
    {
      title: "Pomodoro Timer",
      description:
        "This intelligent timer helps you manage your work sessions and breaks, boosting productivity like never before. Perfect for tech enthusiasts and productivity seekers.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Arduino"],
      category: "IoT",
      liveUrl:
        "https://www.linkedin.com/feed/update/urn:li:activity:7277204581237899264?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3Byt6GuD%2F6RPaimxLwjIZcEQ%3D%3D",
      features: [
        "Intelligent work and break session management",
        "Customizable timer intervals",
        "Physical device built with Arduino",
        "Boosts productivity and focus",
      ],
    },
    {
      title: "Centralized IoT Smart Neighbourhood",
      description:
        "Architected a trailblazing IoT ecosystem in Cisco Packet Tracer, connecting two smart homes via WAN, enabling 99% uptime in centralized device control. Pioneered user-specific web portals and a shared Siren, driving 100% seamless multi-location automation and resource sharing. Fortified security with WPA2-PSK, ACL firewalls, and router hardening, ensuring 100% robust, scalable smart home management.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Computer Networking", "Packet Tracer", "Routing", "IoT"],
      category: "Computer Networking & IoT",
      githubUrl: "https://github.com/arvinder004/IOT-Smart-Neighborhood",
      features: [
        "Centralized device control with 99% uptime via WAN",
        "User-specific web portals for multi-location automation",
        "Shared Siren for synchronized alerts across homes",
        "Robust security with WPA2-PSK, ACLs, and router hardening",
      ],
    },
    {
      title: "Define-It",
      description:
        "Pioneered a high-performance word-search platform, slashing search times by 35% through optimized algorithms. Catalyzed language learning through intuitive word lookup, driving a 20% increase in user engagement and retention.",
      icon: <BarChart className="h-6 w-6" />,
      technologies: ["Node.js", "React.js"],
      category: "Full Stack",
      githubUrl: "https://github.com/arvinder004/Dictionary",
      liveUrl: "https://define-it.netlify.app/",
      features: [
        "High-performance word search with optimized algorithms",
        "Intuitive UI for easy word lookup",
        "35% faster search times",
        "Drives language learning and user engagement",
      ],
    },
    {
      title: "Arduino-Based Solar Tracking System",
      description:
        "Revolutionized energy efficiency with an Arduino UNO-based solar tracking system, leveraging LDR and IR sensors to boost energy collection by 35%. Achieved 100% automation in solar panel alignment using servo motors, eliminating manual adjustments for seamless operation.",
      icon: '<BarChart className="h-6 w-6" />',
      technologies: ["Arduino", "Sensors"],
      category: "IoT",
      liveUrl:
        "https://www.linkedin.com/in/arvinder004/details/projects/1759517846465/single-media-viewer?type=LINK&profileId=ACoAAD-jBkIBkgWihQD2THoA-IHNsXZkr3VM5A0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3Bi28tvkZAS6SuNQ5DbW%2FwUg%3D%3D",
      features: [
        "Achieved 35% energy collection boost over fixed panels.",
        "Provides 100% automated dual-axis solar alignment using servo motors.",
        "Uses LDR and IR sensors for real-time light tracking.",
        "Controlled by Arduino UNO microcontroller for autonomous operation.",
      ],
    },
  ];

  const categoryColors = {
    "Data Science": "bg-blue-500/10 text-blue-500 border-blue-500/30",
    Backend: "bg-green-500/10 text-green-500 border-green-500/30",
    "Machine Learning": "bg-purple-500/10 text-purple-500 border-purple-500/30",
    "Full Stack": "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
    Frontend: "bg-indigo-500/10 text-indigo-500 border-indigo-500/30",
    NLP: "bg-pink-500/10 text-pink-500 border-pink-500/30",
    "Machine Learning & NLP": "bg-gray-500/10 text-gray-500 border-gray-500/30",
    IoT: "bg-orange-500/10 text-orange-500 border-orange-500/30",
    "Computer Networking & IoT":
      "bg-teal-500/10 text-teal-500 border-teal-500/30",
    "Data Visualization": "bg-red-500/10 text-red-500 border-red-500/30",
  };

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-glow">
            Featured Projects
          </h2>
          <div className="relative inline-block">
            <p className="text-xl text-muted-foreground">
              A selection of projects showcasing my expertise in data science,
              backend development, and DevOps
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
                    className={`${
                      categoryColors[
                        project.category as keyof typeof categoryColors
                      ]
                    } group-hover:scale-105 transition-transform duration-300`}
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
                      <li
                        key={featureIndex}
                        className="flex items-center group-hover:text-foreground transition-colors duration-300"
                      >
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
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 magnetic-element group/btn"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      variant="hero"
                      className="magnetic-element group/btn"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Live Demo
                      </a>
                    </Button>
                  )}
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
