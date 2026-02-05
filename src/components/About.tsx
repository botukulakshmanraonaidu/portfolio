import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Laptop, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "5+", label: "Years Experience" },
  { icon: Laptop, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Rocket, value: "100%", label: "Success Rate" },
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
              Passionate About Creating
              <br />
              <span className="text-gradient">Digital Excellence</span>
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
                  I'm a Full Stack Developer with over 5 years of experience building 
                  web applications that make a difference. My expertise spans from 
                  crafting beautiful React frontends to developing robust Django backends.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                  I believe in writing clean, maintainable code and creating user 
                  experiences that are both intuitive and delightful. When I'm not 
                  coding, you'll find me exploring new technologies or contributing 
                  to open-source projects.
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
                  <div className="font-display text-3xl font-bold text-foreground mb-1">
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
