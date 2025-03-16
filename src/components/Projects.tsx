
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Code } from "lucide-react";

const Projects = () => {
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
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  
  const projects = [
    {
      title: "Face Recognition Attendance System",
      description: "A comprehensive attendance management system that uses facial recognition to automate the attendance process, developed using Python.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Computer Vision", "Machine Learning", "OpenCV"],
      demoLink: "#",
      codeLink: "https://github.com",
    },
    {
      title: "Sipsmart",
      description: "Daily Drink Water Monitoring Android application that tracks hydration levels and sends reminders to maintain optimal water intake.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      tags: ["Android", "Java", "SQLite", "UI/UX"],
      demoLink: "#",
      codeLink: "https://github.com",
    },
    {
      title: "Course Management System",
      description: "A full-stack web application for managing educational courses, built with Spring Boot backend and modern frontend technologies.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      tags: ["Spring Boot", "REST API", "JavaScript", "Database"],
      demoLink: "#",
      codeLink: "https://github.com",
    },
  ];
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 text-primary rounded-full mb-4">
            My Work
          </span>
          <h2 className="section-heading text-center mx-auto after:mx-auto">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
            A collection of projects that demonstrate my technical abilities and problem-solving skills.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card overflow-hidden rounded-xl subtle-shadow"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.classList.add("image-loaded");
                  }}
                  style={{ filter: "blur(5px)" }}
                  className="image-loading"
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="px-2 py-1 bg-primary/90 text-white text-xs rounded-md">
                    <Code size={12} className="inline mr-1" /> 
                    {project.tags[0]}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(1).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <motion.a
                    href={project.demoLink}
                    className="flex items-center text-primary hover:underline"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="mr-1">Live Demo</span>
                    <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="mr-1">Source Code</span>
                    <Github size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium transition-all hover:border-primary hover:text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} className="mr-2" />
            <span>View More Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
