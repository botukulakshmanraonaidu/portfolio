import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React and Django, featuring user authentication, payment processing, and inventory management.",
    tags: ["React", "Django", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team workspaces, and project tracking capabilities.",
    tags: ["React", "TypeScript", "Django REST", "WebSockets"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description: "An interactive analytics dashboard with data visualization, custom reports, and real-time metrics tracking for business intelligence.",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Social Media API",
    description: "RESTful API for a social media platform with authentication, posts, comments, and real-time notifications.",
    tags: ["Django", "PostgreSQL", "Redis", "Celery"],
    github: "https://github.com",
  },
  {
    title: "Weather App",
    description: "A beautiful weather application with location-based forecasts and interactive maps.",
    tags: ["React", "OpenWeather API", "Mapbox"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Generator",
    description: "A CLI tool that generates customizable portfolio websites from YAML configuration files.",
    tags: ["Python", "Jinja2", "Click"],
    github: "https://github.com",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

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
              A selection of projects I've built, ranging from full-stack web
              applications to open-source tools.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={40} />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="font-display text-2xl font-semibold text-center mb-8">
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{project.title}</h4>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-primary/80">
                        {tag}{project.tags.indexOf(tag) < project.tags.length - 1 ? " •" : ""}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
