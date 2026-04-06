import { BookOpen, BriefcaseBusiness, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Compucom CSI Systems",
    role: "AI Engineer Intern",
    period: "Feb 2026 - May 2026",
    location: "Pune, India",
    points: [
      "Designed scalable Retrieval-Augmented Generation pipelines using LangChain and vector databases.",
      "Built full-stack AI applications with Next.js frontends and Node.js microservices.",
      "Optimized prompting and grounding strategies to improve response reliability and reduce hallucinations.",
    ],
  },
  {
    company: "RIU Global",
    role: "Freelance Web Developer",
    period: "Nov 2025 - Jan 2026",
    location: "Remote",
    points: [
      "Developed and deployed a production-ready multi-page marketing website for an international telecom training provider.",
      "Implemented an admin dashboard for course management, content updates, and customizable program listings.",
      "Handled domain deployment and hosting for the live platform, with attention to scalability and performance.",
    ],
  },
];

const research = [
  "Performance Evaluation and Comparison of YOLOv8, MobileNet-SSD, and MTCNN for Face Detection in Smart Attendance System",
  "Generative AI-Powered COBOTs for Human-Centric Collaboration and Co-Evolution",
];

const achievements = [
  "GATE 2025 qualified in Computer Science and IT",
  "NPTEL Elite certified in DBMS and Ethical Hacking",
  "Finalist in Smart India Hackathon 2023 and Solve to Evolve Hackathon at IIT Madras",
];

const Experience = () => {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl">
        <div className="section-panel">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="section-kicker">Experience</span>
            <h2 className="mt-6 text-4xl font-bold sm:text-5xl">Recent roles, education, and research work.</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              {experiences.map((item) => (
                <article key={`${item.company}-${item.role}`} className="glass-card p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-primary">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-accent">{item.period}</p>
                      <h3 className="mt-2 text-2xl font-semibold">{item.role}</h3>
                      <p className="mt-1 text-sm text-foreground/90">{item.company}</p>
                      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="space-y-6">
              <article className="glass-card p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-accent">Education</p>
                    <h3 className="mt-2 text-2xl font-semibold">B.Tech. Computer Science and Business Systems</h3>
                    <p className="mt-1 text-sm text-foreground/90">Gyan Ganga Institute of Technology & Sciences</p>
                    <p className="mt-2 text-sm text-muted-foreground">Oct 2022 - May 2026 · Jabalpur, India · CGPA: 8.24</p>
                  </div>
                </div>
              </article>

              <article className="glass-card p-6 sm:p-7">
                <p className="text-sm uppercase tracking-[0.22em] text-accent">Research</p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                  {research.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="glass-card p-6 sm:p-7">
                <p className="text-sm uppercase tracking-[0.22em] text-accent">Highlights</p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                  {achievements.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
