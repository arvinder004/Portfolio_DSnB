// ============================================================
// portfolioData.ts — Single source of truth for portfolio content
// Edit this file to update any section of the portfolio site.
// ============================================================

// ─── Personal / Meta ────────────────────────────────────────
export const meta = {
  name: "Arvinder Singh Dhoul",
  title: "AI Engineer & MSc AI/ML Student",
  tagline: "AI engineer building resilient LLM-powered products",
  resumeUrl: "https://drive.google.com/file/d/19ryfKndqfSx0nNRMeVECkKJ-WB_7-Ik7/view", // Make sure this link points to your newest PDF!
};

// ─── Social Links ────────────────────────────────────────────
export const socials = {
  github: "https://github.com/arvinder004",
  linkedin: "https://www.linkedin.com/in/arvinder004/",
  email: "asdhoul004@gmail.com",
  phone: "+353 89 256 2572",
};

// ─── Hero Section ────────────────────────────────────────────
export const hero = {
  eyebrow: "Portfolio 2026",
  headline:
    "Arvinder Singh Dhoul designs AI systems, full-stack products, and backend workflows that ship cleanly.",
  subheadline:
    "MSc Artificial Intelligence & Machine Learning student at the University of Limerick and an AWS Certified Solutions Architect. Hands-on with resilient cloud backend systems, Generative AI tools, and agentic workflows.",
  focusAreas: ["Agentic AI", "RAG systems", "Cloud backends", "Next.js apps"],
  stats: [
    {
      value: "AI Engineer",
      label: "Former AI Engineer Intern at Compucom CSI Systems — LLM voice pipelines and RAG workflows",
    },
    {
      value: "AWS Certified",
      label: "Solutions Architect – Associate (May 2026 – May 2029)",
    },
    {
      value: "Research + Product",
      label: "Published researcher in Computer Vision and Federated Learning",
    },
  ],
};

// ─── About Section ───────────────────────────────────────────
export const about = {
  headline: "A builder who likes the product, the model, and the infrastructure behind both.",
  bio: [
    "I'm currently completing my MSc in Artificial Intelligence & Machine Learning at the University of Limerick. My recent work spans LLM applications, RAG systems, and full-stack AI products that need both strong engineering and clear user-facing outcomes.",
    "Alongside internships and freelance work I've contributed to research in face detection systems, federated learning, and generative AI-powered collaborative robotics — keeping my engineering anchored in experimentation rather than hype.",
  ],
  tags: ["LangChain", "LangGraph", "FastAPI", "Next.js", "MongoDB", "Docker", "AWS"],
  pillars: [
    {
      title: "LLM applications",
      description:
        "RAG pipelines, agent workflows, and evaluation loops built for dependable, hallucination-free outputs.",
      iconKey: "Database",
    },
    {
      title: "Backend systems",
      description:
        "Python and Node services with Redis, WebSockets, and CI/CD designed to support product features at scale.",
      iconKey: "Server",
    },
    {
      title: "Product delivery",
      description:
        "From freelance client websites to internal AI tools — I like taking ideas from the drawing board to live deployment.",
      iconKey: "Cloud",
    },
    {
      title: "Research mindset",
      description:
        "Comfortable comparing models, publishing findings, and validating ideas with evidence across CV and FL.",
      iconKey: "BarChart3",
    },
  ],
};

// ─── Experience Section ──────────────────────────────────────
export const experiences = [
  {
    company: "Compucom CSI Systems",
    role: "AI Engineer Intern",
    period: "Feb 2026 – Sept 2026",
    location: "Remote",
    points: [
      "Built real-time LLM voice pipelines and RAG workflows, owning features from strategy to deployment.",
      "Built resilient REST and WebSocket backends with Redis, encrypting PII to ensure GDPR compliance.",
      "Wrote clean code in an agile team and managed GitHub Actions CI/CD to ensure operational excellence.",
    ],
  },
  {
    company: "RIU Global",
    role: "Freelance Web Developer",
    period: "Nov 2025 – Jan 2026",
    location: "Remote",
    points: [
      "Built a Next.js and MongoDB web application for an international client, ensuring zero downtime at launch.",
      "Created a custom dashboard by building robust API integrations and scalable software services to independently manage course content.",
      "Managed cloud hosting, DNS, and database indexing to optimize delivery and monitor production.",
    ],
  },
];

export const education = {
  degree: "MSc Artificial Intelligence & Machine Learning",
  institution: "University of Limerick",
  period: "2026 – Present · Limerick, Ireland",
  note: "Undergraduate: B.Tech Computer Science & Business Systems, CGPA 8.24, GGITS (Oct 2022 – May 2026)",
};

export const research = [
  {
    status: "Published",
    title:
      "Evaluating YOLOv8, MobileNet-SSD, and MTCNN for Face Detection in Smart Attendance Systems",
    venue: "IEEE Xplore",
  },
  {
    status: "In Publication",
    title:
      "Generative AI-Powered COBOTs for Human-Centric Collaboration and Co-Evolution",
    venue: "Scopus",
  },
  {
    status: "In Preparation",
    title:
      "Privacy-Preserving Naval Ship Detection and Authorization Using YOLOv8 and Federated Learning",
    venue: "",
  },
  {
    status: "In Preparation",
    title:
      "A Hybrid YOLOv8-CNN-LBPH Framework for Real-Time Intrusion and Weapon Detection",
    venue: "",
  },
];

export const achievements = [
  "AWS Certified Solutions Architect – Associate (May 2026 – May 2029)",
  "GATE 2025 Qualified (Computer Science & IT)",
  "NPTEL Elite Certified in Database Management Systems and Ethical Hacking",
  "Hackathon Finalist: Smart India Hackathon 2023 & Solve to Evolve at IIT Madras",
  "Solved 200+ LeetCode algorithmic challenges and maintains open-source GitHub projects",
];

// ─── Projects Section ────────────────────────────────────────
export type Project = {
  title: string;
  summary: string;
  category: string;
  impact: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  iconKey: string;
};

export const featuredProjects: Project[] = [
  {
    title: "AgenticRAG",
    summary:
      "Engineered an intelligent LangGraph agent that evaluates relevance and re-queries for context accuracy, with a sleek Next.js interface featuring Qdrant vector indexing, inline citations, and document previews.",
    category: "Agentic AI",
    impact:
      "Mapped generated answers to exact source chunks and passages, effectively eliminating AI hallucination. Qdrant vector indexing ensures sub-second retrieval across large document corpora.",
    stack: ["LangGraph", "LangChain", "Qdrant", "Next.js", "TypeScript", "MongoDB"],
    githubUrl: "https://github.com/Anas2604-web/RAG",
    liveUrl: "https://agentic-rag-two.vercel.app/",
    iconKey: "Bot",
  },
  {
    title: "HireIQ",
    summary:
      "Built a scalable FastAPI & React platform utilizing Groq/Gemini LLMs to dynamically generate and score technical interviews with real-time HR dashboards.",
    category: "Full-stack AI",
    impact:
      "Engineered real-time HR dashboards using Redis Pub/Sub and Server-Sent Events (SSE) for sub-second state synchronization. Integrated async MongoDB and custom SMTP pipeline, deployed to Render and Vercel.",
    stack: ["Python", "FastAPI", "TypeScript", "React", "MongoDB", "Redis", "Docker"],
    githubUrl: "https://github.com/arvinder004/hireIQ.git",
    liveUrl: "https://hireiq-mauve.vercel.app/",
    iconKey: "Layers3",
  },
  {
    title: "Customer Churn Risk Dashboard",
    summary:
      "Trained an XGBoost model on over 100,000 records with an interactive dashboard enabling business stakeholders to test retention strategies and view actionable insights.",
    category: "Data product",
    impact:
      "Utilized feature importance and cross-validation to identify core churn drivers. Combined XGBoost modeling, business simulation, and a lightweight app layer for actionable customer strategy.",
    stack: ["XGBoost", "Scikit-Learn", "Pandas", "Python"],
    githubUrl: "https://github.com/arvinder004/Customer-Retention-Churn-Risk-Dashboard",
    liveUrl: "https://web-app-churn-prediction-1.onrender.com/",
    iconKey: "Brain",
  },
];

export const archiveProjects = [
  "Student Exam Performance Predictor",
  "Telecom Customer Churn Prediction Model",
  "Smart Resume Analyzer",
  "Face Recognition Attendance System",
  "Multilingual Video Dubbing Tool",
  "Cue Sports Scorekeeper",
  "BlackBoard Tool",
  "Define-It",
  "Weather App",
  "Arduino-Based Solar Tracking System",
];

// ─── Skills Section ──────────────────────────────────────────
export const skillCategories = [
  {
    title: "Agentic AI and LLMs",
    summary:
      "Building RAG systems, prompt pipelines, multi-agent workflows, and grounded AI experiences.",
    iconKey: "Brain",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Prompt Engineering",
      "Multi-Agent Orchestration",
      "Pydantic",
    ],
  },
  {
    title: "Backend engineering",
    summary:
      "API design and service architecture for AI features, dashboards, and production web platforms.",
    iconKey: "Server",
    skills: ["Python", "FastAPI", "Next.js", "WebSockets", "Redis", "MongoDB", "Docker"],
  },
  {
    title: "Machine learning",
    summary:
      "Hands-on across classical ML, deep learning, NLP, computer vision, and evaluation workflows.",
    iconKey: "Cloud",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "XGBoost",
      "NLP",
      "Computer Vision",
      "Model Evaluation",
    ],
  },
  {
    title: "Cloud and DevOps",
    summary:
      "AWS-certified cloud infrastructure, containerisation, and CI/CD pipelines for production delivery.",
    iconKey: "Database",
    skills: ["AWS", "Docker", "Linux", "GitHub Actions CI/CD", "System Design", "Agile/Scrum"],
  },
];

export const capabilityBands = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C/C++"],
  },
  {
    title: "AI & Data workflow",
    items: [
      "RAG pipelines",
      "Prompt optimization",
      "Typed validation",
      "NLP",
      "Computer vision",
      "Federated Learning",
    ],
  },
  {
    title: "Platform and delivery",
    items: [
      "AWS cloud hosting",
      "Docker containers",
      "GitHub Actions",
      "Production deployments",
      "Performance optimization",
    ],
  },
];

// ─── Contact Section ─────────────────────────────────────────
export const contact = {
  headline: "Let's build something useful together.",
  subheadline:
    "I'm especially interested in AI engineering, LLM applications, RAG systems, and full-stack product work. Open to full-time roles, internships, freelance builds, and thoughtful collaborations.",
  location: "Limerick, Ireland",
  fastestContact:
    "Email works best for full-time roles, internship opportunities, freelance discussions, and AI product collaborations.",
};