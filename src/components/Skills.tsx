import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 93 },
      { name: "Django", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 82 },
      { name: "AWS", level: 78 },
      { name: "CI/CD", level: 85 },
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
              I'm proficient in a wide range of technologies across the full stack,
              allowing me to build complete, production-ready applications.
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
