import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProfilesPage from './pages/ProfilesPage';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profiles" element={<ProfilesPage />} />
      </Routes>

    </div>
  );
}