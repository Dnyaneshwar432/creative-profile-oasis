
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <a href="#home" className="text-2xl font-bold text-primary">DK</a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            <motion.a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="mailto:example@example.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            <span>© {currentYear} Dnyaneshwar Kankale. All rights reserved.</span>
            <Heart size={16} className="mx-1 text-red-500" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
