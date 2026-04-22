import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Users, Activity, Zap, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enterprise Document Question Answering System (LLM + RAG)",
    description: "End-to-end Retrieval-Augmented Generation (RAG) system for accurate question answering from enterprise-scale documents using LangChain and multiple LLMs.",
    tech: ["LangChain", "FastAPI", "FAISS/Chroma", "OpenAI GPT", "LLaMA", "Mistral", "Python"],
    icon: Brain,
    color: "from-emerald-500 to-teal-500",
    highlights: [
      "Document ingestion & chunking pipelines using LangChain and HuggingFace",
      "Vector search using FAISS/Chroma for fast semantic retrieval",
      "Integrated OpenAI GPT, LLaMA, and Mistral for context-aware responses",
      "Metadata filtering & relevance ranking to reduce hallucinations"
    ],
    impact: "100+ req/min handled",
    github: "https://github.com/botukulakshmanraonaidu/Rag_Application",
    demo: "#"
  },
  {
    title: "Wound Detection & Healing Analysis System",
    description: "AI-powered medical imaging system for wound detection and classification. Features healing trend analysis and secure role-based access control.",
    tech: ["OpenCV", "FastAPI", "Python", "Machine Learning", "RBAC", "PostgreSQL"],
    icon: Activity,
    color: "from-purple-500 to-pink-500",
    highlights: [
      "AI-powered detection and classification for medical decision support",
      "Advanced image preprocessing and feature extraction using OpenCV",
      "Secure authentication and role-based access control (RBAC)",
      "Low-latency real-time wound analysis with FastAPI backend"
    ],
    impact: "Production Ready",
    github: "https://github.com/botukulakshmanraonaidu/wound_care",
    demo: "https://woundanalysis.netlify.app/"
  },
  {
    title: "Labour Management System",
    description: "Enterprise platform to efficiently manage workers, contractors, and assignments with robust RBAC and real-time tracking dashboards.",
    tech: ["Django REST", "PostgreSQL", "Python", "Celery", "Docker", "RBAC"],
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    highlights: [
      "Labour Availability & Management System for centralized tracking",
      "Role-based authentication (RBAC) for Admin, Contractor, and Labour users",
      "Scalable backend for registration, attendance, and wage management",
      "Clean RESTful API following microservices-oriented design"
    ],
    impact: "RBAC Implemented",
    github: "https://github.com/botukulakshmanraonaidu/labourmgnt",
    demo: "#"
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-12 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="section-label">My Work</span>
            <h2 className="section-title">
              Projects & <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AI/ML projects showcasing expertise in LLMs, RAG pipelines,
              and full-stack development.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl p-6 lg:p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
                >
                  <div className="flex flex-col lg:flex-row gap-5">
                    {/* Icon & Impact */}
                    <div className="flex-shrink-0 flex lg:flex-col items-center lg:items-start gap-3">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-0.5`}>
                        <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                          <project.icon className="text-foreground" size={24} />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
                        <Zap size={10} />
                        {project.impact}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                        <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                            aria-label="View GitHub Repository"
                          >
                            <Github size={18} />
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                            aria-label="View Live Demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm lg:text-base">
                        {project.description}
                      </p>

                      <ul className="mb-5 grid sm:grid-cols-2 gap-1.5">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs bg-secondary/80 text-foreground rounded-md border border-border/50 hover:border-primary/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
