"use client";
import React from "react";
// import Typical from "react-typical";
import { useTranslations } from "next-intl";
// import Image from 'next/image';
import CountUp from "react-countup";
import ComputersCanvas from "./ComputersCanvas";
export const Banner: React.FC = () => {
  const t = useTranslations('Info')

  return (
    <section className="relative max-w-7xl mx-auto">
      <div className="w-full h-[600px]">
        <ComputersCanvas />
      </div>

      {/* Stats strip */}
      <div className="mt-10 lg:mt-20 px-4">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="max-w-5xl mx-auto flex flex-wrap items-stretch justify-between gap-6 md:gap-10 font-general-medium rounded-3xl bg-slate-900/85 border border-slate-700/70 backdrop-blur-2xl px-6 py-6 md:px-12 md:py-8 shadow-[0_18px_60px_rgba(15,23,42,0.9)]"
        >
          <StatItem value={5} label={t('year')} />
          <StatItem value="8k+" label={t('github')} />
          <StatItem value="92%" label={t('feedback')} />
          <StatItem value="89%" label={t('completed')} />
        </div>
      </div>
    </section>
  );
};



const StatItem = ({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) => (
  <div className="flex-1 min-w-[130px] text-center md:text-left">
    <p className="text-[11px] uppercase tracking-[0.22em] text-sky-400/80 mb-1">
      {label}
    </p>
    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-1">
      <CountUp
        end={typeof value === "string" ? parseFloat(value) : value}
        duration={2}
        separator=","
        suffix={
          typeof value === "string" &&
          isNaN(parseFloat(value[value.length - 1]))
            ? value.slice(-1)
            : ""
        }
      />
    </h2>
    <div className="h-px w-8 mx-auto md:mx-0 mt-2 bg-gradient-to-r from-indigo-400/80 via-sky-400/80 to-transparent" />
  </div>
);