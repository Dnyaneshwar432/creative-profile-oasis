
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const ProgressBar = ({
  label,
  percentage,
  color = "primary",
  delay = 0,
}: ProgressBarProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1.2, delay },
      });
    }
  }, [controls, inView, percentage, delay]);
  
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          className={`h-full bg-${color} rounded-full`}
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
