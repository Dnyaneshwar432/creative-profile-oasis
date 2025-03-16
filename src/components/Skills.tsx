
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Database, Server, Layout, Monitor, Terminal } from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "Java", proficiency: 90 },
        { name: "Python", proficiency: 85 },
        { name: "JavaScript", proficiency: 80 },
      ],
    },
    {
      title: "Backend Technologies",
      icon: <Server size={24} />,
      skills: [
        { name: "Spring Boot", proficiency: 90 },
        { name: "REST APIs", proficiency: 85 },
      ],
    },
    {
      title: "Frontend Technologies",
      icon: <Layout size={24} />,
      skills: [
        { name: "HTML5", proficiency: 80 },
        { name: "CSS3", proficiency: 75 },
      ],
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "PostgreSQL", proficiency: 85 },
        { name: "MongoDB", proficiency: 80 },
        { name: "MySQL", proficiency: 85 },
        { name: "Redis", proficiency: 75 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal size={24} />,
      skills: [
        { name: "Docker", proficiency: 80 },
        { name: "Jenkins", proficiency: 75 },
        { name: "Flyway Migration", proficiency: 70 },
      ],
    },
    {
      title: "Testing & CI/CD",
      icon: <Monitor size={24} />,
      skills: [
        { name: "JUnit", proficiency: 85 },
        { name: "Mockito", proficiency: 80 },
      ],
    },
  ];
  
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 text-primary rounded-full mb-4">
            My Expertise
          </span>
          <h2 className="section-heading text-center mx-auto after:mx-auto">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
            A comprehensive overview of my technical skills and proficiency levels across various domains.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 subtle-shadow card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                  <span className="text-primary">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.proficiency}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1.5, delay: 0.2 * skillIndex }}
                        style={{ "--progress-width": `${skill.proficiency}%` } as React.CSSProperties}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-medium mb-4">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Design Patterns"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
