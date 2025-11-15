// src/components/SearchBar.jsx

import React from 'react';
import { FaSearch, FaBriefcase, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

export default function SearchBar({ onFilterChange, areas, localizacoes }) {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  const inputStyle = `
    w-full pl-12 pr-4 py-3 border 
    border-gray-200 dark:border-gray-700 
    bg-gray-50 dark:bg-gray-900 
    rounded-xl focus:outline-none 
    
    /* MUDANÇA AQUI: de ring-blue-500 para brand-orange */
    focus:ring-2 focus:ring-brand-orange
    
    text-gray-900 dark:text-gray-200
  `;

  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div className="relative md:col-span-2">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="busca"
            placeholder="Buscar por nome, cargo ou tecnologia..."
            className={inputStyle}
            onChange={handleChange}
          />
        </div>
        
        <div className="relative">
          <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <select
            name="area"
            className={`${inputStyle} appearance-none pr-10`} 
            onChange={handleChange}
          >
            <option value="">Todas as Áreas</option>
            {areas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
          <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <select
            name="localizacao"
            className={`${inputStyle} appearance-none pr-10`}
            onChange={handleChange}
          >
            <option value="">Todas as Localizações</option>
            {localizacoes.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

      </div>
    </div>
  );
}