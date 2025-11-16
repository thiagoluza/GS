import React from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'; 

export default function ProfileCard({ perfil, onCardClick }) {
  
  return (
    <div
      onClick={() => onCardClick(perfil)}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                 overflow-hidden group cursor-pointer
                 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl
                 flex items-center p-4" 
    >
      
      <img 
        src={perfil.foto}
        alt={`Foto de ${perfil.nome}`}
        className="w-16 h-16 rounded-full object-cover flex-shrink-0
                   border-2 border-gray-200 dark:border-gray-700" 
      />

      <div className="flex-grow ml-4 min-w-0">
        <div className="flex items-center">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mr-2 truncate">
            {perfil.nome}
          </h3>
          <FaCheckCircle className="text-brand-orange flex-shrink-0" />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
          {perfil.cargo}
        </p>
      </div>

      <div className="ml-4 text-gray-300 dark:text-gray-600 
                      group-hover:text-brand-orange transition-colors">
        <FaArrowRight size={20} />
      </div>
    </div>
  );
}