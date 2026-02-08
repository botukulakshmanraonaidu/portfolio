import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const timelineData = [
  {
    type: "experience",
    title: "AI & ML Developer",
    organization: "Quantum Works Private Limited",
    period: "2024 - Present",
    description: "Building enterprise-grade AI solutions, RAG pipelines, and LLM-powered applications.",
    icon: Briefcase,
  },
  {
    type: "experience",
    title: "Python Developer Intern",
    organization: "Tech Company",
    period: "2023 - 2024",
    description: "Developed backend APIs with Django and FastAPI, integrated ML models.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "B.Tech in CSE (AI)",
    organization: "Narasaraopeta Engineering College",
    period: "2020 - 2024",
    description: "CGPA: 8.37 | Specialized in Artificial Intelligence and Machine Learning.",
    icon: GraduationCap,
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block">My Journey</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Experience & <span className="text-gradient">Education</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center glow-effect ${
                      item.type === "experience" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    <item.icon size={20} />
                  </motion.div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-24 md:ml-0 md:w-[calc(50%-40px)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 text-primary text-sm mb-2">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary/80 font-medium mb-3">{item.organization}</p>
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
