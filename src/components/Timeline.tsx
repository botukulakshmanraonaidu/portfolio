import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const timelineData = [
  {
    type: "experience",
    title: "AI & ML Developer",
    organization: "Quantum Works Private Limited",
    location: "Hyderabad, India",
    period: "2024 - Present",
    description: "Building enterprise-grade AI solutions, RAG pipelines, and LLM-powered applications for business automation.",
    icon: Briefcase,
  },
  {
    type: "experience",
    title: "Python Developer Intern",
    organization: "Tech Company",
    location: "Remote",
    period: "2023 - 2024",
    description: "Developed backend APIs with Django and FastAPI, integrated ML models for production environments.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "B.Tech in CSE (AI)",
    organization: "Narasaraopeta Engineering College",
    location: "Andhra Pradesh, India",
    period: "2020 - 2024",
    description: "CGPA: 8.37 | Specialized in Artificial Intelligence and Machine Learning with focus on deep learning and NLP.",
    icon: GraduationCap,
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="section-label">My Journey</span>
            <h2 className="section-title">
              Experience & <span className="text-gradient">Education</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Central vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent/50 to-transparent" />

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                      item.type === "experience" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-accent text-accent-foreground"
                    }`}
                    style={{ boxShadow: item.type === "experience" ? "0 0 20px hsl(var(--primary) / 0.4)" : "0 0 20px hsl(var(--accent) / 0.4)" }}
                  >
                    <item.icon size={20} />
                  </motion.div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-48px)] ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card-hover rounded-2xl p-6"
                  >
                    <div className={`flex items-center gap-2 text-primary text-sm mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar size={14} />
                      <span className="font-medium">{item.period}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary/90 font-medium mb-2">{item.organization}</p>
                    <div className={`flex items-center gap-1.5 text-muted-foreground text-xs mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <MapPin size={12} />
                      <span>{item.location}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
