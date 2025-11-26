"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const t = useTranslations("Contact");

  const contactItems = [
    {
      id: "email",
      icon: <FaEnvelope className="w-6 h-6 text-indigo-500" />,
      label: "Email",
      description: "Get in touch via email",
      value: t("email"),
      href: `mailto:${t("email")}`,
    },
    {
      id: "phone",
      icon: <FaPhoneAlt className="w-6 h-6 text-indigo-500" />,
      label: "Phone",
      description: "Call or message me",
      value: t("phone"),
      href: `tel:${t("phone")}`,
    },
    {
      id: "location",
      icon: <FaMapMarkerAlt className="w-6 h-6 text-indigo-500" />,
      label: "Location",
      description: "Based in South Korea",
      value: t("location"),
      href: undefined,
    },
    {
      id: "name",
      icon: <FaUser className="w-6 h-6 text-indigo-500" />,
      label: "Full Name",
      description: "Profile information",
      value: t("name"),
      href: undefined,
    },
  ];

  return (
    <section className="w-full pt-24 pb-16 mt-20 border-t-2 border-primary-light dark:border-secondary-dark text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            {t("title")}
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            {t("message")}
          </p>
          <p className="mt-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
            {t("sub_message")}
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          {contactItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-gray-100 dark:border-slate-800 shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Follow me */}
        <div className="mb-10">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4">
            {t("follow_me")}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Khanhlinh952001"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-indigo-500 hover:text-white transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/linh.vokhanh.395"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-indigo-500 hover:text-white transition-colors"
            >
              <FaFacebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-indigo-500 hover:text-white transition-colors"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-indigo-500 hover:text-white transition-colors"
            >
              <FaTiktok className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* CTA box */}
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/80 border border-indigo-100/70 dark:border-slate-800 px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {t("cta_title")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xl">
              {t("cta_message")}
            </p>
          </div>
          <div>
            <a
              href={`mailto:${t("email")}`}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white text-sm font-medium px-5 py-2.5 shadow-md shadow-indigo-400/40 transition-colors"
            >
              {t("cta_button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

