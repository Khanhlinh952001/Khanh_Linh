import React from "react";
import ThemeToggle from "../Effects/ThemeToggle";
import LanguageSwitcher from "../Effects/LanguageSwitcher";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const HeaderPage: React.FC = () => {
  const t = useTranslations("Header");
  return (
    <nav className="flex container mt-3 mx-auto px-4 md:px-8 lg:px-16 justify-between items-center pt-6 text-gray-600 dark:text-gray-200">

      <div className="flex items-center cursor-pointer">
        <Image
          src="/images/avatar.svg"
          alt="Dark Logo"
          width={500}
          height={300}
        />
        <h1 className="ml-3 font-bold text-lg">
          LINH CODER
        </h1>
      </div>
      
      <div className="flex space-x-8">
        <Link href={"#"} className="text-lg">
          {t('projects')}
        </Link>
        <Link href={"#"} className="text-lg">
          {t('about')}
        </Link>
        <Link href={"#"} className="text-lg">
          {t('skills')}
        </Link>
        <Link href={"#"} className="text-lg">
          {t('contact')}
        </Link>
      </div>

      <div className="flex space-x-2 items-center">
      <div className="hidden md:flex">
						<span
							// onClick={showHireMeModal}
							className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
							aria-label="Hire Me Button"
						>
							<button >{t('hire')}</button>
						</span>
					</div>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </nav>
  );
};
