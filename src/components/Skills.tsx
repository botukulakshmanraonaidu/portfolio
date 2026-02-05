import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend & AI/ML",
    skills: [
      { name: "Python", level: 95 },
      { name: "Django", level: 92 },
      { name: "FastAPI", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "PostgreSQL", level: 88 },
    ],
  },
  {
    title: "LLM & AI Technologies",
    skills: [
      { name: "LangChain", level: 88 },
      { name: "HuggingFace", level: 85 },
      { name: "OpenAI GPT", level: 90 },
      { name: "RAG Pipelines", level: 87 },
      { name: "TensorFlow", level: 80 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block">My Skills</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized in AI/ML development with expertise in Python, Django,
              and cutting-edge LLM technologies for building intelligent systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="glass-card rounded-2xl p-8"
              >
                <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
