import React, { useState, useEffect } from 'react';

export default function DarkModeToggle({ floating = false }) { 
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.theme === 'dark') return true;
    if (localStorage.theme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement; 
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const baseStyle = "p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors";
  
  const positionStyle = floating 
    ? "absolute top-3 right-3 md:top-8 md:right-8 z-50" 
    : "flex-shrink-0";

  return (
    <button
      onClick={toggleTheme}
      className={`${baseStyle} ${positionStyle}`}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <img 
          src="/images/day-mode.png"
          alt="Ativar modo claro" 
          className="w-5 h-5 md:w-6 md:h-6" 
        />
      ) : (
        <img 
          src="/images/night-mode.png"
          alt="Ativar modo escuro" 
          className="w-5 h-5 md:w-6 md:h-6"
        />
      )}
    </button>
  );
}