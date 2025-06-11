'use client';
import { use, useMemo } from "react";
import Image from 'next/image'
import React, { useState } from 'react';
import { indianStates } from '../../data/indianStates';
import FilterTags from './components/FilterTags';
import RecipeGrid from './components/RecipeGrid';
import IngredientSearch from './components/IncredientSearch';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { stateRecipes as allStateRecipes } from '@/app/data/recipes/telanganaRecipes';

export type Recipe = {
  id: string;
  name: string;
  image: string;
  difficulty: "easy" | "moderate" | "hard";
  isVeg: boolean;
  type: "dinner" | "snack" | "sweet";
  isInstant: boolean;
  isSpicy: boolean;
  ingredients: readonly string[]; // Use readonly here
  stateId: string;
};
export default function StatePage({ params }: { params: Promise<{ stateId: string }> }) {
  const { stateId } = use(params);
  const state = indianStates.find(s => s.id === stateId.toLowerCase());
  
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchIngredients, setSearchIngredients] = useState<string[]>([]);
  const [showIngredientSearch, setShowIngredientSearch] = useState(false);

  if (!state) return <div>State not found</div>;

  // Get recipes for current state
  const stateRecipes = useMemo(() => 
    allStateRecipes.filter(recipe => recipe.stateId.toLowerCase() === stateId.toLowerCase()),
    [stateId]
  );

  // Apply filters to recipes
  const filteredRecipes = useMemo(() => {
    return stateRecipes.filter(recipe => {
      // Handle ingredient search
      const matchesIngredients = searchIngredients.length === 0 || searchIngredients.every(searchTerm =>
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

      if (!matchesIngredients) return false;

      // Handle tag filters
      return activeFilters.length === 0 || activeFilters.every(filter => {
  switch (filter) {
    case "veg":
      return recipe.isVeg;
    case "dinner":
      return recipe.type === "dinner";
    case "snack":
      return recipe.type === "snack";
    case "sweet":
      return recipe.type === "sweet";
    case "instant":
      return recipe.isInstant;
    case "spicy":
      return recipe.isSpicy;
    default:
      return true;
  }
});
    });
  }, [stateRecipes, searchIngredients, activeFilters]);

  

  // Sort recipes: veg first if veg filter is active
  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    if (activeFilters.includes('veg')) {
      if (a.isVeg && !b.isVeg) return -1;
      if (!a.isVeg && b.isVeg) return 1;
    }
    return 0;
  });

  // Group recipes by difficulty
  const recipesByDifficulty = {
    easy: sortedRecipes.filter(recipe => recipe.difficulty === 'easy'),
    moderate: sortedRecipes.filter(recipe => recipe.difficulty === 'moderate'),
    hard: sortedRecipes.filter(recipe => recipe.difficulty === 'hard'),
  };

  const handleFilterToggle = (filter: string) => {
    if (filter === 'ingredients') {
      setShowIngredientSearch(!showIngredientSearch);
      return;
    }

    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  // Combine all recipes for display
 const allRecipes = [
  ...recipesByDifficulty.easy,
  ...recipesByDifficulty.moderate,
  ...recipesByDifficulty.hard,
] as Recipe[]; // Cast to mutable Recipe[]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="relative h-64 md:h-80 overflow-hidden">
        {state?.image && (
          <img
            src={state.image}
            alt={state.name}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              {state?.name}
            </h1>
            <p className="text-xl opacity-90 mt-2">
              {state?.speciality}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex-1">
        <FilterTags
          activeFilters={activeFilters}
          onFilterToggle={handleFilterToggle}
        />
        
        {showIngredientSearch && (
          <IngredientSearch
            searchIngredients={searchIngredients}
            onIngredientsChange={setSearchIngredients}
          />
        )}

        <RecipeGrid recipes={allRecipes} />
      </div>

      <Footer id="footer" />
    </div>
  );
}