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
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle dark mode"
    >

      {isDarkMode ? (

        <img
          src="/images/night-mode-branco.png" 
          alt="Ativar modo claro"
          className="w-6 h-6"
        />

      ) : (

        <img
          src="/images/night-mode.png" 
          alt="Ativar modo escuro"
          className="w-6 h-6"
        />

      )}

    </button>
  );
}