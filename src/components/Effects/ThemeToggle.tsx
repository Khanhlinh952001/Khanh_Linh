// components/ThemeToggle.tsx
"use client"
import React from 'react';
import { useThemeContext } from '@/contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <FaSun className="text-yellow-500 w-6 h-6" />
      ) : (
        <FaMoon className="text-gray-800 w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
