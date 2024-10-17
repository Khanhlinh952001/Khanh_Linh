// pages/index.tsx hoặc components/HomePage.tsx
import React from 'react';
import AnimatedItem from '@/components/Effects/AnimatedItem';
import ThemeToggle from '@/components/Effects/ThemeToggle'; // Đảm bảo đường dẫn đúng
import LanguageSwitcher from '../Effects/LanguageSwitcher';
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="h-14 bg-slate-500 dark:bg-slate-700 flex justify-around items-center">
        <AnimatedItem animation="top">
          <h1 className="font-bold text-gray-800 dark:text-white">LINH CODER</h1>
        </AnimatedItem>
        <AnimatedItem animation="top">
          <h1 className="text-gray-800 dark:text-white">Xuất hiện từ trên xuống</h1>
        </AnimatedItem>
        <ThemeToggle />
        <LanguageSwitcher/>
      </div>

      <div className="bg-slate-600 dark:bg-slate-800 flex items-center justify-center flex-grow">
        <h1 className="text-white dark:text-gray-200">
          Đây là Nội Dung trong 90% Viewport
        </h1>
      </div>

      {/* <ScrollToDownButton targetId="trang2" /> */}
    </div>
  );
};

export default HomePage;
