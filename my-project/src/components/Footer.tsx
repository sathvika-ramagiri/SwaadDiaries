'use client'

import Link from 'next/link'
import { ChefHat, Mail, MapPin, Phone, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-swaad-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <ChefHat className="h-8 w-8 text-swaad-orange" />
              <span className="font-playfair text-2xl font-bold">SwaadDiaries</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Preserving India's rich culinary heritage through authentic regional recipes, 
              told with the warmth of grandma's storytelling. Join us in celebrating the 
              diverse tastes of India's states.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by Ramagiri Sathvika</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/recipe" className="text-gray-300 hover:text-swaad-orange transition-colors">
                  Browse Recipes
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-swaad-orange transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/search-recipe" className="text-gray-300 hover:text-swaad-orange transition-colors">
                  Search by Ingredients
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-swaad-orange transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-swaad-orange" />
                <span className="text-gray-300 text-sm">hello@swaaddiaries.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-swaad-orange" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-swaad-orange" />
                <span className="text-gray-300 text-sm">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Recipe Categories */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="font-playfair text-lg font-semibold mb-6 text-center">
            Explore by Mood
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Spicy', emoji: '🌶️' },
              { name: 'Sweet', emoji: '🍯' },
              { name: 'Comfort', emoji: '🍲' },
              { name: 'Festive', emoji: '🌼' },
              { name: 'Healthy', emoji: '🥗' }
            ].map((mood) => (
              <button
                key={mood.name}
                className="flex items-center space-x-2 bg-swaad-orange/10 hover:bg-swaad-orange/20 
                         text-swaad-orange px-4 py-2 rounded-full transition-colors text-sm"
              >
                <span>{mood.emoji}</span>
                <span>{mood.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} SwaadDiaries. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-swaad-orange text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-swaad-orange text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-swaad-orange text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer