'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface State {
  id: string
  name: string
  speciality: string
  image: string
  recipeCount: number
  famousDish: string
}

const indianStates: State[] = [
  {
    id: 'punjab',
    name: 'Punjab',
    speciality: 'Rich & Creamy',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    recipeCount: 45,
    famousDish: 'Butter Chicken'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    speciality: 'Royal Flavors',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    recipeCount: 38,
    famousDish: 'Dal Baati Churma'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    speciality: 'Coconut & Spices',
    image: 'https://images.unsplash.com/photo-1678781416302-d59ed9ed46d0?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    recipeCount: 52,
    famousDish: 'Fish Curry'
  },
  {
    id: 'bengal',
    name: 'West Bengal',
    speciality: 'Sweet & Subtle',
    image: 'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    recipeCount: 41,
    famousDish: 'Rasgulla'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    speciality: 'Vegetarian Delights',
    image: 'https://images.unsplash.com/photo-1714799263291-272975db795a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VqYXJhdCUyMGZvb2RzfGVufDB8fDB8fHww',
    recipeCount: 47,
    famousDish: 'Dhokla'
  },
  {
    id: 'telangana',
    name: 'Telangana',
    speciality: 'Spicy & Aromatic',
    image: 'https://images.unsplash.com/photo-1697276063790-a68a966b12f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHlkZXJhYmFkJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D',
    recipeCount: 35,
    famousDish: 'Hyderabadi Biryani'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    speciality: 'Temple Traditions',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    recipeCount: 43,
    famousDish: 'Sambar Rice'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    speciality: 'Street Food Heaven',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    recipeCount: 39,
    famousDish: 'Vada Pav'
  }
]

const StatesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-swaad-dark text-3xl">
            Discover <span className="text-swaad-orange">Regional</span> Flavors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Journey through India's diverse culinary landscape, one state at a time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {indianStates.map((state, index) => (
  <Link href={`http://localhost:3000/states/${state.id}`} key={state.id}>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group cursor-pointer"
    >
      <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={state.image}
          alt={`${state.name} cuisine`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-playfair text-2xl font-bold mb-1">
            {state.name}
          </h3>
          <p className="text-sm text-orange-200 mb-2">
            {state.speciality}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
              {state.recipeCount} recipes
            </span>
            <span className="text-xs opacity-90">
              Famous: {state.famousDish}
            </span>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-swaad-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  </Link>
))}

        
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="/recipe">
            <button className="text-lg text-blue-700 underline underline-offset-4 hover:text-blue-900 transition-colors duration-300 ease-in-out cursor-pointer">
              Explore All States
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default StatesSection
