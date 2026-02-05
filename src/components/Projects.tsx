import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Users, Laptop } from "lucide-react";

const projects = [
  {
    title: "Enterprise Document Q&A System",
    description: "End-to-end RAG system for answering questions from enterprise documents using LangChain and LLMs.",
    tech: ["LangChain", "FastAPI", "FAISS", "OpenAI GPT", "Python"],
    icon: Brain,
    featured: true,
    highlights: [
      "Document ingestion & chunking pipelines",
      "Vector embeddings with semantic search",
      "Metadata filtering for better precision"
    ]
  },
  {
    title: "Labour Management System",
    description: "Complete system to manage workers, contractors, and job assignments with role-based access.",
    tech: ["Django REST Framework", "PostgreSQL", "Python", "REST APIs"],
    icon: Users,
    featured: true,
    highlights: [
      "Role-based authentication",
      "Worker registration & attendance tracking",
      "Scalable microservice architecture"
    ]
  },
  {
    title: "Laptop Price Prediction",
    description: "ML pipeline for predicting laptop prices with 89% accuracy using ensemble methods.",
    tech: ["Scikit-learn", "Django", "NumPy", "Pandas", "GridSearchCV"],
    icon: Laptop,
    featured: false,
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
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block">My Work</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AI/ML projects showcasing expertise in LLMs, RAG pipelines, 
              and full-stack development with Django.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`glass-card rounded-2xl p-8 ${project.featured ? 'border-primary/20' : ''}`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <project.icon className="text-primary" size={32} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <ul className="mb-6 space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
