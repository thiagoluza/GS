import React, { useState, useEffect } from 'react';


export default function DarkModeToggle() {
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.theme === 'dark') {
      return true;
    }
    if (localStorage.theme === 'light') {
      return false;
    }
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

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-8 right-8 p-3 rounded-full 
                 bg-gray-200 dark:bg-gray-700 
                 text-gray-800 dark:text-gray-200
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle dark mode"
    >
      {/* Mostra um ícone ou outro dependendo do estado */}
      {isDarkMode ? '☀️' /* <FaSun /> */ : '🌙' /* <FaMoon /> */}
    </button>
  );
}