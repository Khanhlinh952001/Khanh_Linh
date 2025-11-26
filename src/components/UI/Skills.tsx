"use client"; // Đảm bảo bạn đang sử dụng use client nếu cần thiết
import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaPhotoVideo,
  FaDatabase,
  FaServer,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiMongodb,
  SiExpress,
  SiNuxtdotjs,
  SiNestjs,
  SiLaravel,
  SiFlutter,
  SiGitlab,
  SiSpring,
  SiCanva,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiPrisma,
} from 'react-icons/si';
import { CiMobile1 } from "react-icons/ci";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

// Dữ liệu kỹ năng mở rộng và phân loại
const skills = {
  frontend: [
    { type: 'HTML', level: 90, color: { bar: "#E34C26", title: { background: "#E34C26", text: "#fff" }, level: { text: "#000" } } },
    { type: 'CSS', level: 85, color: { bar: "#1572B6", title: { background: "#1572B6", text: "#fff" }, level: { text: "#000" } } },
    { type: 'JavaScript', level: 95, color: { bar: "#F0DB4F", title: { background: "#F0DB4F", text: "#000" }, level: { text: "#000" } } },
    { type: 'TypeScript', level: 85, color: { bar: "#007ACC", title: { background: "#007ACC", text: "#fff" }, level: { text: "#000" } } },
    { type: 'React', level: 90, color: { bar: "#61DBFB", title: { background: "#61DBFB", text: "#000" }, level: { text: "#000" } } },
    { type: 'Next.js', level: 85, color: { bar: "#000000", title: { background: "#000000", text: "#fff" }, level: { text: "#fff" } } },
    { type: 'Nuxt.js', level: 70, color: { bar: "#00DC82", title: { background: "#00DC82", text: "#000" }, level: { text: "#000" } } },
  ],
  backend: [
    { type: 'Node.js', level: 85, color: { bar: "#68A063", title: { background: "#68A063", text: "#fff" } } },
    { type: 'Express.js', level: 80, color: { bar: "#000000", title: { background: "#000000", text: "#fff" } } },
    { type: 'NestJS', level: 75, color: { bar: "#E0234E", title: { background: "#E0234E", text: "#fff" } } },
    { type: 'Laravel', level: 75, color: { bar: "#FF2D20", title: { background: "#FF2D20", text: "#fff" } } },
    { type: 'Python', level: 75, color: { bar: "#3776AB", title: { background: "#3776AB", text: "#fff" } } },
    { type: 'Spring', level: 70, color: { bar: "#6DB33F", title: { background: "#6DB33F", text: "#fff" } } },
    { type: 'Microservices', level: 70, color: { bar: "#64748B", title: { background: "#1E293B", text: "#fff" } } },
    { type: 'GraphQL', level: 70, color: { bar: "#E535AB", title: { background: "#E535AB", text: "#fff" } } },
    { type: 'MongoDB', level: 75, color: { bar: "#4DB33D", title: { background: "#4DB33D", text: "#fff" } } },
  ],
  data: [
    { type: 'SQL', level: 80, color: { bar: "#64748B", title: { background: "#1E293B", text: "#fff" } } },
    { type: 'MySQL', level: 80, color: { bar: "#4479A1", title: { background: "#4479A1", text: "#fff" } } },
    { type: 'PostgreSQL', level: 75, color: { bar: "#336791", title: { background: "#336791", text: "#fff" } } },
    { type: 'Prisma', level: 70, color: { bar: "#0C344B", title: { background: "#0C344B", text: "#fff" } } },
    { type: 'Redis', level: 70, color: { bar: "#D82C20", title: { background: "#D82C20", text: "#fff" } } },
  ],
  mobile: [
    { type: 'React Native', level: 85, color: { bar: "#61DBFB", title: { background: "#61DBFB", text: "#fff" } } },
    { type: 'Flutter', level: 75, color: { bar: "#02569B", title: { background: "#02569B", text: "#fff" } } },
  ],
  tools: [
    { type: 'Git', level: 85, color: { bar: "#F05032", title: { background: "#F05032", text: "#fff" } } },
    { type: 'GitLab', level: 75, color: { bar: "#FC6D26", title: { background: "#FC6D26", text: "#fff" } } },
    { type: 'Docker', level: 65, color: { bar: "#2496ED", title: { background: "#2496ED", text: "#fff" } } },
    { type: 'Infrastructure', level: 75, color: { bar: "#64748B", title: { background: "#0F172A", text: "#fff" } } },
  ],
  design: [
    { type: 'Figma', level: 90, color: { bar: "#F24E1E", title: { background: "#F24E1E", text: "#fff" } } },
    { type: 'Photoshop', level: 80, color: { bar: "#31A8FF", title: { background: "#31A8FF", text: "#fff" } } },
    { type: 'Canva', level: 85, color: { bar: "#00C4CC", title: { background: "#00C4CC", text: "#000" } } },
  ],
};

// Định nghĩa loại cho các danh mục kỹ năng
type SkillCategory = keyof typeof skills;

type SkillItem = {
  type: string;
  level: number;
  color: {
    bar: string;
    title?: { background: string; text: string };
    level?: { text: string };
  };
};

export const SkillsSection = () => {
  const t = useTranslations('Header');

  return (
    <section className="w-full pt-24 pb-16 mt-20 text-gray-700 dark:text-white border-t-2 border-primary-light/60 dark:border-secondary-dark/60">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-10">
            <p className="text-lg uppercase tracking-[0.25em] text-sky-500 dark:text-sky-300 mb-2">
              {t("skills")}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              {t("skillsTitle")}
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
              {t("skillsDescription")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.keys(skills).map((categoryKey) => {
              const category = categoryKey as SkillCategory;
              const items = skills[category];

              const categoryLabelMap: Record<SkillCategory, string> = {
                frontend: "Frontend",
                backend: "Backend",
                mobile: "Mobile",
                data: "Data / Database",
                tools: "Tools & DevOps",
                design: "UI / Design",
              };

              return (
                <motion.div
                  key={category}
                  className="rounded-2xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-white/40 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 p-5"
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      {categoryLabelMap[category]}
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-sky-500 dark:text-sky-300">
                      {items.length} skills
                    </span>
                  </div>

                  <div className="space-y-4">
                    {items.map((skill: SkillItem) => {
                      const icon = getIcon(skill.type);
                      return (
                        <div key={skill.type} className="space-y-1.5">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 shadow-sm">
                                {icon}
                              </div>
                              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                {skill.type}
                              </span>
                            </div>
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-200/70 dark:bg-slate-800/70 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%`, backgroundColor: skill.color.bar }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const getIcon = (skillType: string) => {
  switch (skillType) {
    case 'HTML':
      return <FaHtml5 className="icon text-orange-600" title="HTML5" />;
    case 'CSS':
      return <FaCss3Alt className="icon text-blue-600" title="CSS3" />;
    case 'JavaScript':
      return <FaJs className="icon text-yellow-500" title="JavaScript" />;
    case 'TypeScript':
      return <SiTypescript className="icon text-blue-700" title="TypeScript" />;
      case 'Express.js':
      return <SiExpress className="icon text-blue-700" title="TypeScript" />;
    case 'React':
      return <FaReact className="icon text-blue-600" title="React" />;
    case 'Node.js':
      return <FaNodeJs className="icon text-green-600" title="Node.js" />;
    case 'Next.js':
      return <SiNextdotjs className="icon text-black" title="Next.js" />;
    case 'Nuxt.js':
      return <SiNuxtdotjs className="icon text-emerald-400" title="Nuxt.js" />;
    case 'Python':
      return <FaPython className="icon text-blue-500" title="Python" />;
    case 'GraphQL':
      return <SiGraphql className="icon text-pink-600" title="GraphQL" />;
    case 'MongoDB':
      return <SiMongodb className="icon text-green-600" title="MongoDB" />;
    case 'SQL':
      return <FaDatabase className="icon text-sky-600" title="SQL" />;
    case 'MySQL':
      return <SiMysql className="icon text-sky-700" title="MySQL" />;
    case 'PostgreSQL':
      return <SiPostgresql className="icon text-sky-800" title="PostgreSQL" />;
    case 'Prisma':
      return <SiPrisma className="icon text-sky-900" title="Prisma" />;
    case 'Redis':
      return <SiRedis className="icon text-red-500" title="Redis" />;
    case 'Git':
      return <FaGitAlt className="icon text-red-600" title="Git" />;
    case 'GitLab':
      return <SiGitlab className="icon text-orange-500" title="GitLab" />;
    case 'Docker':
      return <FaDocker className="icon text-blue-600" title="Docker" />;
    case 'React Native':
      return <CiMobile1 className="icon text-blue-600" title="React Native" />;
    case 'Flutter':
      return <SiFlutter className="icon text-sky-500" title="Flutter" />;
    case 'NestJS':
      return <SiNestjs className="icon text-rose-600" title="NestJS" />;
    case 'Laravel':
      return <SiLaravel className="icon text-red-600" title="Laravel" />;
    case 'Spring':
      return <SiSpring className="icon text-green-600" title="Spring" />;
    case 'Microservices':
      return <FaServer className="icon text-slate-500" title="Microservices" />;
    case 'Infrastructure':
      return <FaServer className="icon text-slate-600" title="Server & Infrastructure Management" />;
    case 'Figma':
      return <FaFigma className="icon text-pink-600" title="Figma" />;
    case 'Photoshop':
      return <FaPhotoVideo className="icon text-purple-600" title="Photoshop" />;
    case 'Canva':
      return <SiCanva className="icon text-cyan-400" title="Canva" />;
    default:
      return null;
  }
};
