"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false); // Trạng thái để theo dõi khi nào component đã mount

  useEffect(() => {
    setMounted(true); // Đặt `mounted` thành true khi component đã mount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null; // Chờ cho đến khi component được mount

  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className={`fixed bottom-20 right-5 rounded-full shadow-md overflow-hidden transition-opacity duration-300 bg-transparent ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      {mounted && (
        <Image
          src="/images/up.gif"
          alt="Scroll to top"
          width={36}
          height={36}
          className="rounded-full object-contain"
          priority
        />
      )}
    </button>
  );
};

export default ScrollToTopButton;
