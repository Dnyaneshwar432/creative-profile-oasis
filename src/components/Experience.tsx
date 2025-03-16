
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const Experience = () => {
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  
  const timelineItems = [
    {
      title: "Associate Software Developer",
      company: "Lentra",
      period: "2025 - Present",
      description: "Working on backend services and DevOps integration.",
      achievements: [
        "Received Pre-Placement Offer (PPO) after successful internship",
        "Contributing to the development of microservices architecture",
        "Implementing DevOps best practices for CI/CD pipelines"
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Lentra",
      period: "2024",
      description: "Internship that led to a full-time position.",
      achievements: [
        "Developed and maintained backend services using Spring Boot",
        "Collaborated with cross-functional teams",
        "Implemented unit tests for backend services"
      ],
    },
    {
      title: "Master of Computer Application",
      company: "Indira College of Engineering and Management, Pune",
      period: "2022 - 2025",
      description: "Pursued advanced studies in computer applications with focus on software development.",
      achievements: [
        "Specialized in Software Development and Cloud Computing",
        "Completed projects in Machine Learning and Web Applications",
        "Participated in coding competitions and hackathons"
      ],
    },
  ];
  
  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-900/50 py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 text-primary rounded-full mb-4">
            My Journey
          </span>
          <h2 className="section-heading text-center mx-auto after:mx-auto">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
            A timeline of my professional journey and educational background.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 transform md:translate-x-px"></div>
          
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-12 md:mb-0 relative ${
                index % 2 === 0 
                  ? "md:pr-12 md:text-right md:ml-auto md:mr-0"
                  : "md:pl-12 md:ml-0"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className={`hidden md:block absolute top-0 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-900 transform ${
                  index % 2 === 0 ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
                }`}
              ></div>
              
              <div className="glass-card p-6 subtle-shadow card-hover">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center ${index % 2 === 0 ? "md:order-2 md:ml-4" : "mr-4"}`}>
                    <Briefcase className="text-primary" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                
                <div className={`flex items-center text-gray-600 dark:text-gray-300 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <p className="font-medium">{item.company}</p>
                </div>
                
                <div className={`flex items-center text-gray-500 dark:text-gray-400 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                
                <ul className="space-y-2">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
