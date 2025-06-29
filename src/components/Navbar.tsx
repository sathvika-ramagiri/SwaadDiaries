'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChefHat } from 'lucide-react';
import LoginSignupPage from '@/app/auth/LoginSignupPage'; // Import the LoginSignupPage component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginSignup, setShowLoginSignup] = useState(false); // State to toggle LoginSignupPage

  const navItems = [
    { name: 'Recipe', href: '/recipe' },
    { name: 'Community', href: '/community' },
    { name: 'SearchRecipe', href: '/search-recipe' },
    { name: 'AboutUs', href: '/about' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#230208]/90 shadow-lg backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <ChefHat className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-gamjaflower text-4xl font-bold">
                <span style={{ color: '#ffb80e' }}>Swaad</span>
                <span style={{ color: '#ff6e0e' }}>Diaries</span>
              </span>
            </Link>

            {/* Navigation Items */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => {
                  if (item.name === 'AboutUs') {
                    return (
                      <a
                        key={item.name}
                        href="#footer"
                        className="hover:scale-105 text-2xl transform transition-all duration-200 font-gamjaflower text-[#f4f1f1]"
                      >
                        {item.name}
                      </a>
                    );
                  }

                  if (item.name === 'SearchRecipe') {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="hover:scale-105 text-2xl transform transition-all duration-200 font-gamjaflower"
                      >
                        <span style={{ color: '#648813' }}>Search</span>
                        <span style={{ color: '#ebd489' }}>Recipe</span>
                      </Link>
                    );
                  }
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`hover:scale-105 text-2xl transform transition-all duration-200 ${
                        ['Recipe', 'Community', 'AboutUs'].includes(item.name)
                          ? 'font-gamjaflower text-[#f4f1f1]'
                          : 'nav-link'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Login/Signup Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setShowLoginSignup(true)} // Show LoginSignupPage on click
                className="btn-secondary text-lg px-2 py-1 rounded-full border-2 border-[#ffb80e] text-[#ffb80e] hover:bg-[#ffb80e] hover:text-[#230208] transition font-gamjaflower shadow-md"
              >
                LOGIN
              </button>
              <button
                onClick={() => setShowLoginSignup(true)} // Show LoginSignupPage on click
                className="btn-primary bg-[#ffb80e] rounded-full text-lg px-2 py-1 text-[#230208] font-gamjaflower font-bold shadow-md hover:bg-[#ff6e0e] hover:text-white transition"
              >
                SIGN UP
              </button>
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
                <button
                  onClick={() => setShowLoginSignup(true)} // Show LoginSignupPage on click
                  className="text-center py-2 text-white hover:text-swaad-yellow transition-colors"
                >
                  LOGIN
                </button>
                <button
                  onClick={() => setShowLoginSignup(true)} // Show LoginSignupPage on click
                  className="btn-primary text-center"
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

     
          {/* LoginSignupPage */}
{showLoginSignup && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
    <LoginSignupPage onClose={() => setShowLoginSignup(false)} />
  </div>
)}
    </>
  );
};

export default Navbar;