
import React, { useState } from 'react';
import { FaSearch, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import CustomDropdown from './CustomDropdown';

export default function SearchBar({ onFilterChange, areas, localizacoes }) {
  
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleSearchChange = (e) => {
    onFilterChange(e.target.name, e.target.value);
  };

  const handleAreaChange = (area) => {
    setSelectedArea(area);
    onFilterChange('area', area);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    onFilterChange('localizacao', location);
  };

  const inputStyle = `
    w-full pl-12 pr-4 py-3 border 
    border-gray-200 dark:border-gray-700 
    bg-gray-50 dark:bg-gray-900 
    rounded-xl focus:outline-none 
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
            onChange={handleSearchChange}
          />
        </div>
        
        <CustomDropdown
          icon={FaBriefcase}
          options={areas}
          value={selectedArea}
          onChange={handleAreaChange}
          placeholder="Todas as Áreas"
        />
        
        <CustomDropdown
          icon={FaMapMarkerAlt}
          options={localizacoes}
          value={selectedLocation}
          onChange={handleLocationChange}
          placeholder="Todas as Localizações"
        />

      </div>
    </div>
  );
}