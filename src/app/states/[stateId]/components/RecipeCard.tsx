import React from 'react';
import Link from 'next/link';

interface Recipe {
  id: string;
  name: string;
  image: string;
  difficulty: 'easy' | 'moderate' | 'hard';
  isVeg: boolean;
  type: 'dinner' | 'snack' | 'sweet';
  isInstant: boolean;
  isSpicy: boolean;
  ingredients: string[];
  stateId: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Recipe Image */}
      <div className="relative h-48">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder-recipe.jpg';
          }}
        />
        
        {/* Tags Overlay */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {recipe.isVeg && (
            <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
              Veg
            </span>
          )}
          {recipe.isInstant && (
            <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
              Instant
            </span>
          )}
          {recipe.isSpicy && (
            <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">
              Spicy
            </span>
          )}
          <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full capitalize">
            {recipe.type}
          </span>
        </div>
      </div>

      {/* Recipe Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {recipe.name}
        </h3>
        
        <div className="mb-3">
          <p className="text-sm text-gray-600 mb-1">Main Ingredients:</p>
          <p className="text-sm text-gray-500 line-clamp-2">
            {recipe.ingredients.slice(0, 3).join(', ')}
            {recipe.ingredients.length > 3 && '...'}
          </p>
        </div>

        {/* View Recipe Button */}
        <Link
          href={`/recipe/${recipe.id}`}
          className="block w-full text-center bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}