"use client"
import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaPython, FaDatabase, FaGitAlt, FaDocker, FaFigma, FaPhotoVideo } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiGraphql, SiMongodb, SiExpress,  } from 'react-icons/si';
import { CiMobile1 } from "react-icons/ci";
import SkillBar from 'react-skillbars';
import { useTranslations } from 'next-intl';
import {motion} from 'framer-motion'
// Dữ liệu kỹ năng mở rộng và phân loại
const skills = {
  frontend: [
    { type: 'HTML', level: 90, color: { bar: "#E34C26", title: { background: "#E34C26", text: "#" } } },
    { type: 'CSS', level: 85, color: { bar: "#1572B6", title: { background: "#1572B6", text: "#fff" } } },
    { type: 'JavaScript', level: 95, color: { bar: "#F0DB4F", title: { background: "#F0DB4F", text: "#000" } } },
    { type: 'TypeScript', level: 85, color: { bar: "#007ACC", title: { background: "#007ACC", text: "#fff" } } },
    { type: 'React', level: 90, color: { bar: "#61DBFB", title: { background: "#61DBFB", text: "#000" } } },
    { type: 'Next.js', level: 80, color: { bar: "#000000", title: { background: "#000000", text: "#fff" }, level: { text: "#000" }  } },
  ],
  backend: [
    { type: 'Node.js', level: 85, color: { bar: "#68A063", title: { background: "#68A063", text: "#fff" } } },
    { type: 'Express.js', level: 80, color: { bar: "#000000", title: { background: "#000000", text: "#fff" } } },
    { type: 'Python', level: 75, color: { bar: "#3776AB", title: { background: "#3776AB", text: "#fff" } } },
    { type: 'GraphQL', level: 70, color: { bar: "#E535AB", title: { background: "#E535AB", text: "#fff" } } },
    { type: 'MongoDB', level: 75, color: { bar: "#4DB33D", title: { background: "#4DB33D", text: "#fff" } } },
  ],
  mobile: [
    { type: 'React Native', level: 85, color: { bar: "#61DBFB", title: { background: "#61DBFB", text: "#fff", level: "#000" } } },
  ],
  tools: [
    { type: 'Git', level: 85, color: { bar: "#F05032", title: { background: "#F05032", text: "#fff" } } },
    { type: 'Docker', level: 65, color: { bar: "#2496ED", title: { background: "#2496ED", text: "#fff" } } },
  ],
  design: [
    { type: 'Figma', level: 90, color: { bar: "#F24E1E", title: { background: "#F24E1E", text: "#fff" } } },
    { type: 'Photoshop', level: 80, color: { bar: "#31A8FF", title: { background: "#31A8FF", text: "#fff" } } },
  ],
};

// Thành phần hiển thị kỹ năng
export const SkillsSection = () => {
    const t = useTranslations('Header');
    return (
<motion.div 
               initial={{ opacity: 0, y: 100 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ ease: "easeInOut", duration: 0.9, delay: 1.3 }} className="bg-gray-100 dark:bg-slate-700 = p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">{t('skills')}</h2>
    
    {/* Icons cho các kỹ năng */}
    <div className="flex flex-wrap justify-center gap-6 mb-8 text-4xl text-gray-700">
      <FaHtml5 className="text-orange-600" title="HTML5" />
      <FaCss3Alt className="text-blue-600" title="CSS3" />
      <FaJs className="text-yellow-500" title="JavaScript" />
      <SiTypescript className="text-blue-700" title="TypeScript" />
      <FaReact className="text-cyan-500" title="React" />
      <SiNextdotjs className="text-black" title="Next.js" />
      <FaNodeJs className="text-green-600" title="Node.js" />
      <SiExpress className="text-black" title="Express.js" />
      <FaPython className="text-blue-500" title="Python" />
      <SiGraphql className="text-pink-600" title="GraphQL" />
      <FaDatabase className="text-gray-600" title="Databases" />
      <SiMongodb className="text-green-500" title="MongoDB" />
      <CiMobile1 className ="text-cyan-500" title="React Native" />
      <FaGitAlt className="text-orange-600" title="Git" />
      <FaDocker className="text-blue-600" title="Docker" />
      <FaFigma className="text-purple-600" title="Figma" />
      <FaPhotoVideo className="text-blue-800" title="Photoshop" />
    </div>
    
    {/* Biểu đồ skill bars theo từng loại */}
    {Object.entries(skills).map(([category, categorySkills]) => (
      <div key={category} className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 capitalize">{category}</h3>
        <SkillBar skills={categorySkills}  height={30} animationDuration={1000}  />
        
      </div>
    ))}
  </motion.div>

    )
  
}
