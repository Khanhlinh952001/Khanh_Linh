"use client"
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FaSlideshare } from "react-icons/fa6";
export const AboutPage = () => {
    const t = useTranslations('Info')
  return (
    <div
      className="container mx-auto items-center"
    >
      <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <motion.div
    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.9, delay: 0.1 }} className="w-full sm:w-1/4 mb-7 sm:mb-0">
          <img
            src="/images/avt.jpg"
            alt="Your Name"
            className="rounded-lg w-96"
          />
        </motion.div>
        <motion.div
    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.9, delay: 0.5 }} className="font-general-regular w-full sm:w-3/4 text-left flex flex-col justify-center">
          <p className="mb-4 text-ternary-dark p-4 dark:text-ternary-light text-lg text-center">
           {t('bio')}
          </p>
          <div className="mt-6 w-full flex justify-center">
              <FaSlideshare className='text-2xl'/>
          </div>
        </motion.div>
      </div>
      <motion.div
    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.9, delay: 1 }} className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
        <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
          <StatItem value={5} label="Years of experience" />
          <StatItem value="8k+" label="Stars on GitHub" />
          <StatItem value="92%" label="Positive feedback" />
          <StatItem value="77%" label="Projects completed" />
        </div>
      </motion.div>
    </div>
  );
};

const StatItem = ({ value, label }: { value: string | number; label: string }) => (
  <div className="mb-20 sm:mb-0">
    <h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2">
      {value}
    </h2>
    <span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
      {label}
    </span>
  </div>
);
