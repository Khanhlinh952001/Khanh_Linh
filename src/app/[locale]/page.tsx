// pages/index.tsx
import React from 'react';
import AnimatedItem from '@/components/Effects/AnimatedItem';
import HomePage from "@/components/UI/HomePage";
import { useTranslations } from 'next-intl';
const Home: React.FC = () => {
  const t = useTranslations("HomePage")
  return (
    <div className='text-black'>
      <h1 className='text-2xl text-red-500'> {t('title')}</h1>
      <HomePage />

      {/* Phần nội dung thứ hai */}
      <div className='h-screen bg-slate-300' id="trang2">
        <AnimatedItem animation="left">
          <h2 className="text-black text-center">OK</h2> {/* Sử dụng chuỗi dịch */}
        </AnimatedItem>
      </div>

      {/* Phần nội dung thứ ba */}
      <AnimatedItem animation="right">
        <div className="h-screen bg-slate-400 flex items-center justify-center">
          <h2 className="text-white">OK</h2> {/* Sử dụng chuỗi dịch */}
        </div>
      </AnimatedItem>

      {/* Phần nội dung thứ tư */}
      <AnimatedItem animation="bottom">
        <div className="h-screen bg-slate-500 flex items-center justify-center">
          <h2 className="text-white">he</h2> {/* Sử dụng chuỗi dịch */}
        </div>
      </AnimatedItem>
    </div>
  );
};

export default Home;
