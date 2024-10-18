import React from 'react';
import { HeaderPage } from '@/components/Ui/Header';
import { Banner } from '@/components/Ui/Banner';
const Home: React.FC = () => {
  return (
    <div className='text-black'>
      <HeaderPage />
      <Banner/>
     
    </div>
  );
};

export default Home;
