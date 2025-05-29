'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChefHat } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Recipe', href: '/recipe' },
    { name: 'Community', href: '/community' },
    { name: 'SearchRecipe', href: '/search-recipe' },
    { name: 'AboutUs', href: '/about' },
  ]

  return (
    <nav className="fixed w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <ChefHat className="h-8 w-8 text-swaad-orange group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-playfair text-2xl font-bold text-white">
              SwaadDiaries
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link hover:scale-105 transform transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Login/Signup Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="nav-link">
              LOGIN
            </Link>
            <Link href="/signup" className="btn-primary">
              SIGN UP
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-swaad-yellow transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-white hover:text-swaad-yellow transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-3 pt-4">
              <Link
                href="/login"
                className="text-center py-2 text-white hover:text-swaad-yellow transition-colors"
              >
                LOGIN
              </Link>
              <Link
                href="/signup"
                className="btn-primary text-center"
              >
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar