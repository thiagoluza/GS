// src/components/ProfileCard.jsx

import React from 'react';
import { FaUserFriends, FaRegEye, FaCheckCircle } from 'react-icons/fa'; 

export default function ProfileCard({ perfil, onCardClick }) {
  
  const handleFollow = (e) => {
    e.stopPropagation(); 
    alert(`Você começou a seguir ${perfil.nome}!`);
  };

  return (
    <div
      onClick={() => onCardClick(perfil)}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                 overflow-hidden group cursor-pointer
                 transform transition-all duration-300 hover:scale-[1.03]"
    >
      
      <img 
        src={perfil.foto}
        alt={`Foto de ${perfil.nome}`}
        className="w-full h-56 object-cover" 
      />

      <div className="p-5">
        
        <div className="flex items-center mb-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mr-2">
            {perfil.nome}
          </h3>
          {/* MUDANÇA AQUI: de text-green-500 para text-brand-orange */}
          <FaCheckCircle className="text-brand-orange" />
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-10">
          {perfil.resumo.substring(0, 70)}...
        </p>

        <div className="flex items-center justify-between mt-4">
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-4">
            <span className="flex items-center">
              <FaUserFriends className="mr-1.5" /> 
              {Math.floor(Math.random() * 500) + 100} 
            </span>
            <span className="flex items-center">
              <FaRegEye className="mr-1.5" /> 
              {Math.floor(Math.random() * 1000) + 200} 
            </span>
          </div>
          
          <button 
            type="button"
            onClick={handleFollow}
            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                       font-semibold px-5 py-2 rounded-full text-sm
                       hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            Follow +
          </button>
        </div>
      </div>
    </div>
  );
}