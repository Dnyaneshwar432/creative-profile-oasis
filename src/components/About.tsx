
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, Award, Target } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" ref={ref} className="bg-gray-50 dark:bg-gray-900/50 py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 text-primary rounded-full mb-4">
              About Me
            </span>
            <h2 className="section-heading text-center mx-auto after:mx-auto">
              Professional Summary
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6">
              Associate Software Developer at Lentra, passionate about backend development, DevOps, and machine learning. 
              Strong foundation in Java, Spring Boot, and database management, with hands-on experience in AI/ML, Python, 
              and full-stack development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 subtle-shadow card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium">Master of Computer Application (MCA)</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Indira College of Engineering and Management, Pune
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card p-8 subtle-shadow card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Work Experience</h3>
              </div>
              <div>
                <h4 className="text-lg font-medium">Associate Software Developer</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Lentra (2025 - Present)
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Received Pre-Placement Offer (PPO) after internship</li>
                  <li>Working on backend services and DevOps integration</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card p-8 subtle-shadow card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Certifications & Learning</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>DevOps Training (Ongoing)</li>
                <li>Machine Learning & AI Enthusiast</li>
                <li>Strong understanding of Design Patterns</li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card p-8 subtle-shadow card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                  <Target className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Career Goal</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Aspiring to crack Google interviews and excel in project management & machine learning.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
