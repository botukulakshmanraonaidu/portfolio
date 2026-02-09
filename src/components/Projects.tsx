import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Users, Laptop, Star, Zap, Server, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Enterprise Document Q&A System",
    description: "End-to-end RAG system for answering questions from enterprise documents using LangChain and LLMs. Processes 10K+ documents with sub-second query response times.",
    tech: ["LangChain", "FastAPI", "FAISS", "OpenAI GPT", "Python", "Redis"],
    icon: Brain,
    color: "from-emerald-500 to-teal-500",
    highlights: [
      "Document ingestion & chunking pipelines with custom splitters",
      "Vector embeddings with semantic search using FAISS",
      "Metadata filtering & hybrid search for precision",
      "REST API with streaming responses for real-time Q&A"
    ],
    impact: "10K+ docs processed"
  },
  {
    title: "Labour Management System",
    description: "Complete enterprise system to manage workers, contractors, and job assignments with role-based access control and real-time tracking dashboards.",
    tech: ["Django REST", "PostgreSQL", "Python", "REST APIs", "Celery", "Docker"],
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    highlights: [
      "Role-based authentication with JWT tokens",
      "Worker registration, attendance & payroll tracking",
      "Scalable microservice architecture with Docker",
      "Admin dashboard with analytics & reporting"
    ],
    impact: "500+ workers managed"
  },
  {
    title: "Laptop Price Prediction",
    description: "ML pipeline for predicting laptop prices with 89% accuracy using ensemble methods. Features automated data preprocessing and real-time prediction API.",
    tech: ["Scikit-learn", "Django", "NumPy", "Pandas", "XGBoost"],
    icon: Laptop,
    color: "from-purple-500 to-pink-500",
    highlights: [
      "Feature engineering for 15+ hardware specifications",
      "Cross-validation with GridSearchCV & hyperparameter tuning",
      "Ensemble methods (Random Forest, XGBoost, Gradient Boosting)",
      "REST endpoints for real-time price prediction"
    ],
    impact: "89% accuracy"
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
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
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      
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
