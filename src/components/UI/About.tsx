"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaSlideshare } from "react-icons/fa6";
import Image from "next/image";
import CountUp from 'react-countup';
export const AboutPage = () => {
  const t = useTranslations("Info");

  return (
    <div className="container mx-auto items-center">
      <div className="sm:block md:block lg:flex sm:gap-10 mt-10 sm:mt-20">
        <div
          data-aos="fade-up" data-aos-duration="500"
          className="w-full md:w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center"
        >
          <Image
            src="/images/avt.jpg"
            alt="Your Name"
            width={500}
            height={300}
            className="rounded-lg w-96"
          />
        </div>
        <div
            data-aos="fade-up" data-aos-duration="500"
          className="font-general-regular w-full md:w-full sm:w-3/4 text-justify flex flex-col justify-center"

        >
          <p className="mb-4 text-ternary-dark p-4 dark:text-ternary-light text-lg">
            {t("bio")}
          </p>
          <div className="mt-6 w-full flex justify-center">
            <FaSlideshare className="text-2xl dark:text-ternary-light" />
          </div>
        </div>
      </div>
      <div
      
        className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm"
      >
        <div  data-aos="fade-up" data-aos-duration="500"  className="font-general-medium container mx-auto py-20 justify-center space-x-4 flex items-center">
          <StatItem value={5} label="Years of experience" />
          <StatItem value="8k+" label="Stars on GitHub" />
          <StatItem value="92%" label="Positive feedback" />
          <StatItem value="89%" label="Projects completed" />
        </div>
      </div>
    </div>
  );
};
const StatItem = ({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) => (
  <div className="mb-20 sm:mb-0 text-center">
    <h2 className="text-4xl text-secondary-dark dark:text-secondary-light mb-2">
      <CountUp
        end={typeof value === 'string' ? parseFloat(value) : value}
        duration={2} // thời gian đếm, có thể tùy chỉnh
        separator="," // dấu phân cách hàng nghìn
        suffix={typeof value === 'string' && isNaN(parseFloat(value[value.length - 1])) ? value.slice(-1) : ''}
      />
    </h2>
    <span className="font-general-regular block text-md text-ternary-dark dark:text-ternary-light">
      {label}
    </span>
  </div>
);
