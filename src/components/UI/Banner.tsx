"use client";
import React from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";
import { FiArrowDownCircle } from "react-icons/fi";
import { useTranslations } from "next-intl";
export const Banner: React.FC = () => {
  const t = useTranslations('Banner')
  return (
    <div className="container mx-auto">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col container sm:justify-between items-center sm:flex-row mt-12 md:mt-2 px-20"
      >
        <div className="w-full md:w-1/3 text-left">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.2,
            }}
            className=" font-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-gray-200 uppercase"
          >
           {t('hi')}
          </motion.h1>
          <h1 className=" font-semibold text-2xl lg:text-2xl xl:text-3xl text-center sm:text-left text-ternary-dark dark:text-gray-200">
            <Typical
              steps={[(t('fullStack')), 3000, t('design'), 3000, t('mobile'), 3000]}
              loop={Infinity}
              wrapper="span"
            />
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.3,
            }}
            className="flex justify-center sm:block"
          >
            <a
              download="/CV-KhanhLinh.pdf"
              href="/CV-KhanhLinh.pdf"
              className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-8 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
              aria-label="Download CV"
            >
              <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
              <span className="text-sm sm:text-lg font-general-medium duration-100">
                Download CV
              </span>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="w-6/12 sm:w-2/3 text-right float-right mt-8 sm:mt-0"
        >
          <img src="/images/developer.svg" alt="Developer" className="dark:hidden" />
          <img src="/images/developer-dark.svg" alt="Developer" className="hidden dark:block" />
        </motion.div>
      </motion.section>
      {/* Additional section for projects portfolio can be added here */}
    </div>
  );
};
