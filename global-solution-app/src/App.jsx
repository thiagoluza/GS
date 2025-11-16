// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DarkModeToggle from './components/DarkModeToggle';

// Importe suas novas páginas
import LandingPage from './pages/LandingPage';
import ProfilesPage from './pages/ProfilesPage';

export default function App() {
  return (
    // O 'relative' e o DarkModeToggle ficam aqui
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900">
      <DarkModeToggle />

      <Routes>
        {/* Rota 1: A Landing Page (/) */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Rota 2: A Página de Perfis (/profiles) */}
        <Route path="/profiles" element={<ProfilesPage />} />
      </Routes>
    </div>
  );
}