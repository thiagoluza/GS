
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function CustomDropdown({ icon: Icon, options, value, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const buttonStyle = `
    w-full pl-12 pr-10 py-3 text-left border 
    border-gray-200 dark:border-gray-700 
    bg-gray-50 dark:bg-gray-900 
    rounded-xl focus:outline-none 
    focus:ring-2 focus:ring-brand-orange
    text-gray-900 dark:text-gray-200
  `;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      
      {Icon && (
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
      )}

      <button
        type="button"
        className={`${buttonStyle} flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? 'text-gray-900 dark:text-white' : 'text-gray-400'}>
          {value || placeholder}
        </span>
        <FaChevronDown className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 
                     rounded-lg shadow-xl max-h-60 overflow-y-auto z-20
                     scrollbar-thin 
                     scrollbar-thumb-brand-orange/80 
                     scrollbar-track-gray-100 dark:scrollbar-track-gray-700
                     hover:scrollbar-thumb-brand-orange"
        >
          <div
            onClick={() => handleSelect('')}
            className="px-4 py-3 text-gray-700 dark:text-gray-200 
                       hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            {placeholder}
          </div>
          
          {(options || []).map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-3 text-gray-700 dark:text-gray-200 
                         hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}