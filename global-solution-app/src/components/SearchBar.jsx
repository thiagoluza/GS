
import React from 'react';

export default function SearchBar({ onFilterChange, areas, localizacoes }) {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <input
          type="text"
          name="busca"
          placeholder="Buscar por nome, cargo ou tecnologia..."
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 rounded-lg focus:outline-none 
                     focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
        
        <select
          name="area"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 rounded-lg focus:outline-none 
                     focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        >
          <option value="">Todas as Áreas</option>
          {areas.map(area => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
        
        <select
          name="localizacao"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 rounded-lg focus:outline-none 
                     focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        >
          <option value="">Todas as Localizações</option>
          {localizacoes.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

      </div>
    </div>
  );
}