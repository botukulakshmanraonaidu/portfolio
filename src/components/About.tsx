import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Database, Code2, Cpu, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Brain, value: "AI/ML", label: "Specialization", color: "from-emerald-500 to-teal-500" },
  { icon: Database, value: "RAG", label: "Pipelines Built", color: "from-blue-500 to-cyan-500" },
  { icon: Award, value: "8.37", label: "CGPA", color: "from-purple-500 to-pink-500" },
  { icon: Cpu, value: "LLMs", label: "Expertise", color: "from-orange-500 to-red-500" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Crafting Intelligent
              <br />
              <span className="text-gradient">Solutions</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl" />
                <div className="relative z-10 space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    I'm an <span className="text-foreground font-semibold">AI & Machine Learning Developer</span> with a strong foundation in Python, 
                    NLP, backend APIs, and ML model development. Currently working at 
                    <span className="text-primary font-medium"> Quantum Works Private Limited</span>, building enterprise-grade AI solutions.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    I specialize in building <span className="text-foreground font-medium">LLMs, RAG pipelines, vector search</span>, and 
                    deploying data-driven applications using Django and FastAPI. 
                    B.Tech in CSE (AI) from Narasaraopeta Engineering College.
                  </p>
                  <div className="flex items-center gap-3 pt-4">
                    <TrendingUp className="text-primary" size={20} />
                    <span className="text-sm text-muted-foreground">Building the future with AI, one model at a time</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-5"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  <div className={`mx-auto mb-4 w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} p-0.5`}>
                    <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                      <stat.icon className="text-foreground group-hover:text-primary transition-colors" size={24} />
                    </div>
                  </div>
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
