import React, { useState } from 'react';

interface IngredientSearchProps {
  searchIngredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
}

export default function IngredientSearch({ 
  searchIngredients, 
  onIngredientsChange 
}: IngredientSearchProps) {
  const [inputValue, setInputValue] = useState('');

  const handleAddIngredient = () => {
    if (inputValue.trim() && !searchIngredients.includes(inputValue.trim())) {
      onIngredientsChange([...searchIngredients, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemoveIngredient = (ingredient: string) => {
    onIngredientsChange(searchIngredients.filter(item => item !== ingredient));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddIngredient();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">Search by Ingredients</h3>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter ingredient name..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          onClick={handleAddIngredient}
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          Add
        </button>
      </div>

      {searchIngredients.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {searchIngredients.map((ingredient, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
            >
              {ingredient}
              <button
                onClick={() => handleRemoveIngredient(ingredient)}
                className="text-orange-600 hover:text-orange-800 font-bold"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}