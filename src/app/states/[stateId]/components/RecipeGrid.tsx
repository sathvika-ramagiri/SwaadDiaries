import React from 'react';
import Link from 'next/link';

interface Recipe {
  id: string;
  name: string;
  image: string;
  difficulty: string;
  isVeg: boolean;
  type: string;
  isInstant: boolean;
  isSpicy: boolean;
  ingredients: readonly string[];
  stateId: string;
  description?: string;
  time?: string;
  servings?: string;
  tags?: string[];
}

interface RecipeGridProps {
  recipes: readonly Recipe[];
}

const fallbackImage = '/images/utensils.svg';

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <div className="text-center text-gray-500 py-8">No recipes found for this state.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Recipe Image */}
          <div className="relative h-48">
            <img
              src={recipe.image || fallbackImage}
              alt={recipe.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== window.location.origin + fallbackImage) {
                  target.src = fallbackImage;
                }
              }}
            />
            {/* Difficulty Tag */}
            <span className="absolute top-2 right-2 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
              {recipe.difficulty?.charAt(0).toUpperCase() + recipe.difficulty?.slice(1) || 'Medium'}
            </span>
            {/* State Tag */}
            <span className="absolute bottom-2 left-2 bg-white/80 text-gray-800 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 shadow">
              <svg className="w-4 h-4 text-orange-500 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243a8 8 0 1 1 11.314 0z"/><circle cx="12" cy="12" r="3"/></svg>
              {recipe.stateId?.charAt(0).toUpperCase() + recipe.stateId?.slice(1)}
            </span>
          </div>

          {/* Recipe Info */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{recipe.name}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {recipe.description || 'Traditional wheat balls served with spiced lentils and sweet churma'}
            </p>
            {/* Time & Servings */}
            <div className="flex items-center text-gray-500 text-sm mb-2 gap-6">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                {recipe.time || '1.5 hours'}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M9 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/></svg>
                {recipe.servings || 'Serves 4'}
              </span>
            </div>
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {(recipe.tags || ['comfort', 'festive']).map((tag, idx) => (
                <span key={idx} className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            {/* View Recipe Button */}
            <Link href={`/recipes/${recipe.id}`}
              className="block w-full text-center bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-semibold mt-auto"
            >
              View Recipe
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeGrid;
