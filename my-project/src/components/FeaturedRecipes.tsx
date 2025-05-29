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
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d25a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1571167530149-c9de0bf39b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1589301773859-2d8b12b76c9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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