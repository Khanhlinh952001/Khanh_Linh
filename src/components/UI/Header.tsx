/* eslint-disable @next/next/no-img-element */
import React from "react";
import ThemeToggle from "../Effects/ThemeToggle";
import LanguageSwitcher from "../Effects/LanguageSwitcher";
import Link from "next/link";
import { useTranslations } from 'next-intl';
// import AnimatedItem from '../Effects/AnimatedItem';
// Định nghĩa HeaderPage
export const HeaderPage: React.FC = () => {
  const t = useTranslations("Header");
  return (
    <nav className="flex  container justify-around pt-6 text-gray-600 dark:text-gray-100">
      <div className="flex cursor-pointer">
        <img
        style={{ width: "40px", height: "40px" }}
        src="/images/avatar.svg"
        className="w-3 h-3"
        alt="Dark Logo"
      />
      <h1 className="mt-2 ml-2 font-bold">
        LINH CODER
      </h1>
      </div>
      
      <div className="flex pt-3 space-x-6">
         <Link href={"#"} className="text-lg ">
           {t('projects')}
         </Link>
         <Link href={"#"} className="text-lg ">
           {t('about')}
         </Link>
         <Link href={"#"} className="text-lg ">
           {t('contact')}
         </Link>
      </div>
      <div className="flex space-x-2 ">
      <ThemeToggle />
      <LanguageSwitcher />  
      </div>
      
    </nav>
  );
};
