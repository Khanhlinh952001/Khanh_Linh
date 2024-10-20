import { IoSearch } from "react-icons/io5";
export const Products: React.FC = () => {
    return (
        <div className="container mx-auto">
            {/* Previous section code... */}
            <section className="py-5 sm:py-10 mt-5 sm:mt-10">
                <div className="text-center">
                    <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-gray-200">Projects portfolio</p>
                </div>
                <div className="mt-10 sm:mt-16">
                    <h3 className="font-general-regular text-center text-secondary-dark dark:text-gray-200 text-md sm:text-xl mb-3">Search projects by title or filter by category</h3>
                    <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
                        <div className="flex justify-between gap-2">
                            <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
                               <IoSearch className="dark:text-gray-200"/>
                            </span>
                            <input className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-gray-700" id="name" name="name" type="search" placeholder="Search Projects" aria-label="Name" />
                        </div>
                        <select className="font-general-medium px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-gray-200">
                            <option className="text-sm sm:text-md" value="">All Projects</option>
                            <option className="text-normal sm:text-md">Web Application</option>
                            <option className="text-normal sm:text-md">Mobile Application</option>
                            <option className="text-normal sm:text-md">UI/UX Design</option>
                            <option className="text-normal sm:text-md">Branding</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
                    {/* Project items */}
                    <div style={{ opacity: 1 }}>
                        <a aria-label="Single Project" href="/projects/single-project">
                            <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                                <div>
                                    <img src="/static/media/web-project-2.50124aa2.jpg" className="rounded-t-xl border-none" alt="Single Project" />
                                </div>
                                <div className="text-center px-4 py-6">
                                    <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-gray-200 mb-2">Topik Website</p>
                                    <span className="text-lg text-ternary-dark dark:text-gray-200">Web Application</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Repeat for other projects... */}
                </div>
            </section>
            {/* ... additional sections and content ... */}
        </div>
    )
}
