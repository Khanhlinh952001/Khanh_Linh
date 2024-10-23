import React from 'react';
import { HeaderPage } from '@/components/UI/Header';
import { Banner } from '@/components/UI/Banner';
import { Products } from '@/components/UI/Products';
import ScrollEffect from '@/components/Effects/ScrollEffect';
import Footer from '@/components/UI/Footer';
import { SkillsSection } from '@/components/UI/Skills';
import { AboutPage } from '@/components/UI/About';
const Home: React.FC = () => {
  return (
    <div className='text-black'>
      <div className=''>
        <ScrollEffect>
          <HeaderPage />
          <Banner />
        </ScrollEffect>
      </div>
      <div className="">
        <ScrollEffect>
          <AboutPage />
        </ScrollEffect>
      </div>




      <div className="">
        <ScrollEffect>
          <Products />
        </ScrollEffect>
      </div>


      <div className="">
        <ScrollEffect>
          <SkillsSection />
        </ScrollEffect>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
