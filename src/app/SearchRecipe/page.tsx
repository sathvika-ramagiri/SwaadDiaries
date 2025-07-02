// app/searchRecipe/page.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState, useMemo } from 'react'
import RecipeCard from '@/app/recipe/components/RecipeCard'
import allRecipes from '@/app/api/data/allRecipes.json';
import { indianStates } from '@/app/data/indianStates';
import FilterTags from '@/app/states/[stateId]/components/FilterTags';



export default function SearchRecipePage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [filteredRecipes, setFilteredRecipes] = useState(allRecipes);

  useEffect(() => {
    if (query) {
      const results = allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some((ingredient: string) =>
          ingredient.toLowerCase().includes(query.toLowerCase())
        ) ||
        recipe.stateId.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredRecipes(results)
    } else {
      setFilteredRecipes(allRecipes)
    }
  }, [query])

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Search Results for: <span className="text-orange-500">{query}</span></h1>

      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-600">No recipes found for <strong>{query}</strong></p>
      )}
    </div>
  )
}
