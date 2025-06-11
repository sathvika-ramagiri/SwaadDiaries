'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import Image from 'next/image'
import { Clock, Users, MapPin } from 'lucide-react'

interface Recipe {
  id: string
  title: string
  state: string
  image: string
  cookTime: string
  serves: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  mood: string[]
  description: string
}

const featuredRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Hyderabadi Biryani',
    state: 'Telangana',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D',
    cookTime: '2 hours',
    serves: 6,
    difficulty: 'Hard',
    mood: ['festive', 'comfort'],
    description: 'Aromatic basmati rice layered with tender mutton and exotic spices'
  },
  {
    id: '2',
    title: 'Rajasthani Dal Baati Churma',
    state: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    cookTime: '1.5 hours',
    serves: 4,
    difficulty: 'Medium',
    mood: ['comfort', 'festive'],
    description: 'Traditional wheat balls served with spiced lentils and sweet churma'
  },
  {
    id: '3',
    title: 'Bengali Fish Curry',
    state: 'West Bengal',
    image: 'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    cookTime: '45 mins',
    serves: 4,
    difficulty: 'Medium',
    mood: ['spicy', 'comfort'],
    description: 'Fresh fish cooked in mustard oil with Bengali five-spice blend'
  },
  {
    id: '4',
    title: 'Kerala Payasam',
    state: 'Kerala',
    image: 'data:image/jpeg;base64,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',
    cookTime: '1 hour',
    serves: 8,
    difficulty: 'Easy',
    mood: ['sweet', 'festive'],
    description: 'Creamy rice pudding with coconut milk, cardamom and nuts'
  },
  {
    id: '5',
    title: 'Gujarati Dhokla',
    state: 'Gujarat',
    image: 'https://images.unsplash.com/photo-1714799263291-272975db795a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGhva2xhfGVufDB8fDB8fHww',
    cookTime: '30 mins',
    serves: 4,
    difficulty: 'Easy',
    mood: ['healthy', 'spicy'],
    description: 'Steamed gram flour cakes with tangy and spicy tempering'
  },
  {
    id: '6',
    title: 'Punjabi Sarson da Saag',
    state: 'Punjab',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    cookTime: '1 hour',
    serves: 4,
    difficulty: 'Medium',
    mood: ['healthy', 'comfort'],
    description: 'Slow-cooked mustard greens served with makki di roti and butter'
  }
]

const FeaturedRecipes = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Hard': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-swaad-dark">
            Featured <span className="text-swaad-orange">Recipes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover authentic flavors from across India, passed down through generations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="recipe-card group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                    {recipe.difficulty}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-white bg-black/50 rounded-full px-3 py-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{recipe.state}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-swaad-dark mb-2">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {recipe.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{recipe.cookTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>Serves {recipe.serves}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {recipe.mood.map((mood) => (
                    <span
                      key={mood}
                      className="px-2 py-1 bg-swaad-orange/10 text-swaad-orange text-xs rounded-full"
                    >
                      {mood}
                    </span>
                  ))}
                </div>
                
                <button className="w-full btn-primary py-2 text-sm">
                  View Recipe
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="btn-primary text-lg px-8 py-4">
            Explore All Recipes
          </button>
        </motion.div>
      </div>
    </section>
    )
}

export default FeaturedRecipes