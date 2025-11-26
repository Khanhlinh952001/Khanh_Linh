"use client";
import { IoSearch } from "react-icons/io5";
import { RiShareBoxLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { projects } from "@/data/projects/project";
import { Project } from "@/types/project";


export const Products: React.FC = () => {
  const t = useTranslations("Projects");
  const params = useParams();
  const locale = params?.locale as "en" | "vi" | "kr";

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Sử dụng platforms từ bản tiếng Anh để filter cho thống nhất
  const filteredProjects = projects.filter((project) => {
    const base = project.en.platforms;
    const matchesCategory = selectedCategory ? base === selectedCategory : true;

    const data = project[locale];
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      !search ||
      data.name.toLowerCase().includes(search) ||
      data.description.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

    return (
    <div className="max-w-7xl mx-auto pt-24">
      <section className="py-5 sm:py-12 mt-5 sm:mt-10">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-center"
        >
          <p className="font-general-medium text-2xl sm:text-4xl mb-2 text-ternary-dark dark:text-gray-200">
            {t("projects")}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {filteredProjects.length} {t("projects")}
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="mt-10 sm:mt-12"
        >
          <h3 className="font-general-regular text-center text-secondary-dark dark:text-gray-200 text-md sm:text-xl mb-4">
            {t("searchPlaceholder")}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/10 dark:border-slate-700 pb-4">
            <div className="flex flex-1 items-center gap-2">
              <span className="hidden sm:flex bg-white/80 dark:bg-slate-900/80 border border-white/20 dark:border-slate-700 p-2.5 shadow-sm rounded-xl">
                <IoSearch className="text-gray-700 dark:text-gray-200" />
              </span>
              <input
                className="flex-1 font-general-medium pl-3 pr-3 sm:px-4 py-2.5 border border-white/20 dark:border-slate-700 rounded-lg text-sm sm:text-md bg-white/90 dark:bg-slate-900/80 text-primary-dark dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400/70 focus:border-sky-400/70"
                id="name"
                name="name"
                type="search"
                placeholder={t("search")}
                aria-label="Search projects"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="font-general-medium w-full sm:w-auto px-4 sm:px-6 py-2.5 border border-white/20 dark:border-slate-700 rounded-lg text-sm sm:text-md bg-white/90 dark:bg-slate-900/80 text-primary-dark dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-400/70 focus:border-sky-400/70"
            >
              <option value="">{t("All")}</option>
              <option value="Website">{t("Website")}</option>
              <option value="Mobile">{t("Mobile")}</option>
              <option value="Website and Mobile">
                {t("Website")} & {t("Mobile")}
              </option>
            </select>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-8"
        >
          {filteredProjects.map((project: Project) => {
            const projectData = project[locale];
            const base = project.en.platforms;
            const shortTechs = projectData.technologies.slice(0, 3);
            const hasMoreTechs =
              projectData.technologies.length > shortTechs.length;

            return (
              <div
                key={project.id}
                className="group relative max-w-full sm:max-w-md rounded-2xl bg-gradient-to-b from-white/95 to-slate-50/95 dark:from-slate-900/95 dark:to-slate-950/95 border border-white/40 dark:border-slate-800 shadow-xl shadow-slate-900/10 dark:shadow-black/40 backdrop-blur-xl overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <Link href={`/${locale}/projects/${project.id}`}>
                  <div className="relative">
                    <Image
                      src={projectData.image.img}
                      alt={projectData.image.alt}
                      width={600}
                      height={360}
                      className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-white/90 dark:bg-slate-900/90 px-3 py-1 text-xs font-semibold text-gray-800 dark:text-gray-100 shadow-sm">
                        {base}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-4 md:p-5 flex flex-col gap-3">
                  <div>
                    <h5 className="mb-1 text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                      {projectData.name}
                    </h5>
                    <p className="text-xs uppercase tracking-[0.18em] text-sky-500 dark:text-sky-300">
                      #{project.id.padStart(2, "0")}
                    </p>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    {truncateDescription(projectData.description, 140)}
                  </p>

                  {shortTechs.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {shortTechs.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full bg-slate-100/90 dark:bg-slate-800/80 px-2.5 py-1 text-[11px] font-medium text-slate-800 dark:text-slate-100"
                        >
                          {tech}
                        </span>
                      ))}
                      {hasMoreTechs && (
                        <span className="inline-flex items-center rounded-full bg-slate-100/80 dark:bg-slate-800/70 px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:text-slate-300">
                          +{projectData.technologies.length - shortTechs.length}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-3 flex items-center justify-between">
                    <Link
                      href={`/${locale}/projects/${project.id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-md shadow-indigo-500/30 hover:shadow-lg hover:from-indigo-600 hover:to-sky-600 transition"
                    >
                      {t("readMore")}
                      <RiShareBoxLine className="text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
