import React from 'react';

interface FilterTagsProps {
  activeFilters: string[];
  onFilterToggle: (filter: string) => void;
}

const filterOptions = [
  { id: 'dinner', label: 'Dinner' },
  { id: 'snack', label: 'Snack' },
  { id: 'ingredients', label: 'Ingredients' },
  { id: 'instant', label: 'Instant' },
  { id: 'veg', label: 'Veg' },
  { id: 'sweet', label: 'Sweet' },
  { id: 'spicy', label: 'Spicy' },
];

export default function FilterTags({ activeFilters, onFilterToggle }: FilterTagsProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onFilterToggle(option.id)}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${
                activeFilters.includes(option.id) || option.id === 'ingredients'
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-orange-300'
              }
            `}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}