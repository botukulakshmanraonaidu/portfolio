import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Users, Laptop, ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "Enterprise Document Q&A System",
    description: "End-to-end RAG system for answering questions from enterprise documents using LangChain and LLMs.",
    tech: ["LangChain", "FastAPI", "FAISS", "OpenAI GPT", "Python"],
    icon: Brain,
    featured: true,
    color: "from-emerald-500 to-teal-500",
    highlights: [
      "Document ingestion & chunking pipelines",
      "Vector embeddings with semantic search",
      "Metadata filtering for better precision"
    ]
  },
  {
    title: "Labour Management System",
    description: "Complete system to manage workers, contractors, and job assignments with role-based access.",
    tech: ["Django REST", "PostgreSQL", "Python", "REST APIs"],
    icon: Users,
    featured: true,
    color: "from-blue-500 to-indigo-500",
    highlights: [
      "Role-based authentication",
      "Worker registration & attendance",
      "Scalable microservice architecture"
    ]
  },
  {
    title: "Laptop Price Prediction",
    description: "ML pipeline for predicting laptop prices with 89% accuracy using ensemble methods.",
    tech: ["Scikit-learn", "Django", "NumPy", "Pandas"],
    icon: Laptop,
    featured: false,
    color: "from-purple-500 to-pink-500",
    highlights: [
      "Feature engineering for hardware specs",
      "Cross-validation with GridSearchCV",
      "REST endpoints for real-time prediction"
    ]
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-label">My Work</span>
            <h2 className="section-title">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AI/ML projects showcasing expertise in LLMs, RAG pipelines, 
              and full-stack development.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`glass-card rounded-2xl p-8 transition-all duration-300 hover:border-primary/30 ${project.featured ? 'hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]' : ''}`}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} p-0.5`}>
                        <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center">
                          <project.icon className="text-foreground" size={28} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
                              <Star size={12} fill="currentColor" />
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-5 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <ul className="mb-6 grid sm:grid-cols-3 gap-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-sm bg-secondary/80 text-foreground rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
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
