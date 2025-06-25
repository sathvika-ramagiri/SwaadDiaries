'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface MoodFilter {
  id: string
  name: string
  emoji: string
  description: string
  color: string
}

const moodFilters: MoodFilter[] = [
  {
    id: 'spicy',
    name: 'Craving Spicy',
    emoji: '🌶️',
    description: 'Fire up your taste buds',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'sweet',
    name: 'Sweet Tooth',
    emoji: '🍯',
    description: 'Satisfy your sweet cravings',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    id: 'comfort',
    name: 'Comfort Food',
    emoji: '🍲',
    description: 'Warm and comforting meals',
    color: 'from-orange-400 to-red-400'
  },
  {
    id: 'festive',
    name: 'Festive',
    emoji: '🌼',
    description: 'Celebrate with traditional treats',
    color: 'from-pink-400 to-purple-500'
  },
  {
    id: 'healthy',
    name: 'Light & Healthy',
    emoji: '🥗',
    description: 'Fresh and nutritious options',
    color: 'from-green-400 to-emerald-500'
  }
]

const MoodFilters = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId === selectedMood ? null : moodId)
    // Here you would typically filter recipes based on mood
    console.log('Selected mood:', moodId)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-swaad-cream to-orange-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="section-title text-5xl font-playfair font-bold text-swaad-dark mb-4">
            What's Your Mood Today?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let your cravings guide you to the perfect recipe from across India's diverse culinary landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {moodFilters.map((mood, index) => (
            <motion.div
              key={mood.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mood-card cursor-pointer relative overflow-hidden ${
                selectedMood === mood.id 
                  ? 'ring-4 ring-swaad-orange bg-white/40' 
                  : 'hover:bg-white/30'
              }`}
              onClick={() => handleMoodSelect(mood.id)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0  bg-gradient-to-br ${mood.color} opacity-18`} />
              
              <div className="relative p-3 z-10">
                <div className="text-5xl mb-4 animate-float">
                  {mood.emoji}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-swaad-dark mb-2">
                  {mood.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {mood.description}
                </p>
              </div>
              
              {/* Selection Indicator */}
              {selectedMood === mood.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-3 right-3 w-6 h-6 bg-swaad-orange rounded-full flex items-center justify-center"
                >
                  <span className="text-white text-sm">✓</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {selectedMood && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <button className="btn-primary text-lg px-8 py-4">
              Find {moodFilters.find(m => m.id === selectedMood)?.name} Recipes
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default MoodFilters