'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import allRecipes from '@/app/api/data/allRecipes.json';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Recipe {
  id: string;
  name: string;
  image: string;
  difficulty: string; // made flexible
  isVeg: boolean;
  type: string; // made flexible
  isInstant: boolean;
  isSpicy: boolean;
  ingredients: string[];
  procedure: string[];
  stateId: string;
}

export default function SingleRecipePage() {
  const params = useParams();
  const recipeId = params.recipeId as string;

  const recipe: Recipe | undefined = (allRecipes as Recipe[]).find((r) => r.id === recipeId);

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Navbar />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Recipe Not Found</h1>
        <p className="text-gray-600">The recipe you are looking for does not exist.</p>
        <Footer id="footer" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
          {/* Recipe Image Section */}
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image
              src={recipe.image || '/images/placeholder-recipe.jpg'}
              alt={recipe.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>

          {/* Recipe Details Section */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.name}</h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.isVeg && (
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full font-medium">
                  Vegetarian
                </span>
              )}
              {recipe.isInstant && (
                <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full font-medium">
                  Instant
                </span>
              )}
              {recipe.isSpicy && (
                <span className="px-3 py-1 bg-red-500 text-white text-sm rounded-full font-medium">
                  Spicy
                </span>
              )}
              <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full font-medium capitalize">
                {recipe.type}
              </span>
              <span className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full font-medium capitalize">
                Difficulty: {recipe.difficulty}
              </span>
              <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full font-medium capitalize">
                From: {recipe.stateId.replace(/-/g, ' ')}
              </span>
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Ingredients</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Procedure */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Procedure</h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-1">
                {recipe.procedure.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Additional Information (Placeholder) */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Additional Information</h2>
              <p className="text-gray-600 italic">
                Any other important notes, serving suggestions, or historical context would go here.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer id="footer" />
    </div>
  );
}