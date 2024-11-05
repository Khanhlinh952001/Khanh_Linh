"use client";

import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser, AiOutlineGlobal } from 'react-icons/ai';
import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <div className="text-gray-800 pt-24 dark:text-white pb-8 mt-20 border-t-2 border-primary-light w-full dark:border-secondary-dark">
      <motion.div 
        className='flex flex-col text-left md:w-1/2 mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg'
        initial={{ opacity: 0, scale: 0.9, rotateY: 10 }} 
        animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-4">{t('title')}</h2>
        <p className="text-center mb-6">{t('message')}</p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <AiOutlineMail className="text-blue-500 dark:text-blue-300 mr-3 text-xl" />
            <span>{t('email_bg')}: <a href={`mailto:${t('email')}`} className="text-blue-500 dark:text-blue-300">{t('email')}</a></span>
          </div>
          <div className="flex items-center">
            <AiOutlinePhone className="text-blue-500 dark:text-blue-300 mr-3 text-xl" />
            <span>{t('phone_bg')}: <span className="text-blue-500 dark:text-blue-300">{t('phone')}</span></span>
          </div>
          <div className="flex items-center">
            <AiOutlineUser className="text-blue-500 dark:text-blue-300 mr-3 text-xl" />
            <span>{t('name_bg')}: <span className="text-blue-500 dark:text-blue-300">{t('name')}</span></span>
          </div>
          <div className="flex items-center">
            <AiOutlineGlobal className="text-blue-500 dark:text-blue-300 mr-3 text-xl" />
            <span>{t('location_bg')}: <span className="text-blue-500 dark:text-blue-300">{t('location')}</span></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
