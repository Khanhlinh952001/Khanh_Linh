"use client"
import React, { useState } from "react";
import ThemeToggle from "../Effects/ThemeToggle";
import LanguageSwitcher from "../Effects/LanguageSwitcher";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

export const HeaderPage: React.FC = () => {
  const t = useTranslations("Header");
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex container mt-3 mx-auto px-4 md:px-8 lg:px-16 justify-between items-center pt-6 text-gray-600 dark:text-gray-200">
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <Image
          src="/images/avatar.svg"
          alt="Dark Logo"
          width={40}
          height={40}
        />
        <h1 className="ml-3 font-bold text-lg">
          LINH CODER
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6"> {/* Giảm khoảng cách giữa các mục */}
        <Link href={"#"} className="text-lg md:text-md sm:mt-1">
          {t('projects')}
        </Link>
        <Link href={"#"} className="text-lg md:text-md sm:mt-1">
          {t('about')}
        </Link>
        <Link href={"#"} className="text-lg md:text-md sm:mt-1">
          {t('skills')}
        </Link>
        <Link href={"#"} className="text-lg md:text-md sm:mt-1">
          {t('contact')}
        </Link>
      </div>

      {/* Hire Me button + Theme and Language Switcher */}
      <div className="hidden md:flex space-x-2 items-center">
        <span
          className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
          aria-label="Hire Me Button"
        >
          <button>{t('hire')}</button>
        </span>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center space-x-2">
      <ThemeToggle />

      <LanguageSwitcher />

        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full mt-8 bg-gray-50 z-10 dark:bg-gray-800 flex flex-col items-center space-y-3 py-4 md:hidden"> {/* Giảm khoảng cách giữa các mục */}
          <Link href={"#"} className="text-lg" onClick={toggleMenu}>
            {t('projects')}
          </Link>
          <Link href={"#"} className="text-lg" onClick={toggleMenu}>
            {t('about')}
          </Link>
          <Link href={"#"} className="text-lg" onClick={toggleMenu}>
            {t('skills')}
          </Link>
          <Link href={"#"} className="text-lg" onClick={toggleMenu}>
            {t('contact')}
          </Link>
          <span
            className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2 duration-300"
            aria-label="Hire Me Button"
          >
            <button>{t('hire')}</button>
          </span>
         
        </div>
      )}
    </nav>
  );
};
