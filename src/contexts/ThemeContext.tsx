// context/ThemeContext.tsx
"use client"
import React, { createContext, useContext, useState, useEffect, FC } from 'react';
import { Theme, THEME_LOCAL_STORAGE_KEY } from '../types/theme';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

const getThemeFromLocalStorage = (): Theme => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme | null;
    if (storedTheme) {
      return storedTheme;
    }
    // Nếu không có theme trong localStorage, kiểm tra chế độ hệ thống
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? Theme.DARK : Theme.LIGHT;
  }
  // Mặc định là Light mode nếu chạy trên server
  return Theme.LIGHT;
};

export const ThemeContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getThemeFromLocalStorage);

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));

  useEffect(() => {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
    // Thêm hoặc loại bỏ lớp 'dark' từ thẻ <html>
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (theme === Theme.DARK) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
