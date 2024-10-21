"use client"
import { IoSearch } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";
export const Products: React.FC = () => {
    const t = useTranslations('Projects')
    return (
        <div className="max-w-7xl mx-auto">
            {/* Previous section code... */}
            <section className="py-5 sm:py-10 mt-5 sm:mt-10">
                <motion.div
                initial={{ opacity: 0, y: 180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.9, delay: 0.1 }}
                    className="text-center">
                    <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-gray-200">{t('projects')}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 180 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.9, delay: 0.6 }} className="mt-10 sm:mt-16">
                    <h3 className="font-general-regular text-center text-secondary-dark dark:text-gray-200 text-md sm:text-xl mb-3">{t('searchPlaceholder')}</h3>
                    <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
                        <div className="flex justify-between gap-2">
                            <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
                                <IoSearch className="dark:text-gray-200" />
                            </span>
                            <input className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-gray-700" id="name" name="name" type="search" placeholder={t('search')} aria-label="Name" />
                        </div>
                        <select className="font-general-medium px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-gray-200">
                            <option className="text-sm sm:text-md" value="">{t('All')}</option>
                            <option className="text-normal sm:text-md">{t('Web')}</option>
                            <option className="text-normal sm:text-md">{t('Mobile')}</option>
                            <option className="text-normal sm:text-md">{t('Design')}</option>
                            
                        </select>
                    </div>
                </motion.div>



                <motion.div 
               initial={{ opacity: 0, y: 180 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ ease: "easeInOut", duration: 0.9, delay: 1.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
                    {/* Project items */}


                    <div className="max-w-sm dark:bg-[#293041] border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg p-4 rounded" src="https://ewm.swiss/application/files/4016/0396/6469/World_Wide_Web_EWM_Web_Design_Agency_.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2  text-sm font-medium text-center text-[#6266f1]">
                                Read more
                                <FaAngleRight/>
                            </a>
                        </div>
                    </div>

                   

                    {/* Repeat for other projects... */}
                </motion.div>


            </section>
            {/* ... additional sections and content ... */}
        </div>
    )
}
