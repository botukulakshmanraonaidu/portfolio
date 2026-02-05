import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Code2, Cpu } from "lucide-react";

const stats = [
  { icon: Brain, value: "AI/ML", label: "Specialization" },
  { icon: Database, value: "RAG", label: "Pipelines Built" },
  { icon: Code2, value: "8.37", label: "CGPA" },
  { icon: Cpu, value: "LLMs", label: "Expertise" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              AI & Machine Learning
              <br />
              <span className="text-gradient">Developer</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 relative z-10">
                  I'm an AI & Machine Learning Developer with a strong foundation in Python, 
                  NLP, backend APIs, and ML model development. Currently working at 
                  Quantum Works Private Limited, building enterprise-grade AI solutions.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                  I specialize in building LLMs, RAG pipelines, vector search, and 
                  deploying data-driven applications using Django and FastAPI. 
                  B.Tech in CSE (AI) from Narasaraopeta Engineering College.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-colors duration-300"
                >
                  <stat.icon className="mx-auto mb-3 text-primary" size={28} />
                  <div className="font-display text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
