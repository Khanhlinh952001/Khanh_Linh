import React from 'react';
import { HeaderPage } from '@/components/UI/Header';
import { Banner } from '@/components/UI/Banner';
import { Products } from '@/components/UI/Products';
const Home: React.FC = () => {
  return (
    <div className='text-black'>
      <HeaderPage />
    
      <Banner/>  
      <hr className='container mx-auto mt-10 dark:border-gray-500 border-gray-400' />
        <Products/>
    </div>
  );
};

export default Home;
