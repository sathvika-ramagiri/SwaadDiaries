'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, User2, ChefHat, Search } from 'lucide-react';
import LoginPage from '@/app/auth/LoginPage';
import SignupPage from '@/app/auth/SignupPage';
import allRecipes from '@/app/api/data/allRecipes.json';

// Define the recipe type based on your data
type Recipe = {
  id: string;
  name: string;
  image: string;
  difficulty: string;
  cuisine?: string;
  isVeg?: boolean;
  type?: string;
  isInstant?: boolean;
  isSpicy?: boolean;
  ingredients?: string[];
  stateId?: string;
  procedure?: string[];
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup' | null>(null);
  const [user, setUser] = useState<any>(null);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { name: 'Recipe', href: '/recipe' },
    { name: 'Community', href: '/community' },
    { name: 'SearchRecipe', href: '/searchrecipe' },
    { name: 'AboutUs', href: '/about' },
  ];

  const handleAuthClick = (type: 'login' | 'signup') => {
    setAuthType(type);
    setShowAuth(true);
  };

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) setUser(JSON.parse(userData));

    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchInput(false);
        setSearchQuery('');
        setFilteredRecipes([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload();
  };

  const handleSearchRecipeClick = () => {
    setShowSearchInput(true);
  };

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      const filtered = (allRecipes as Recipe[]).filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredRecipes(filtered.slice(0, 5)); // Show max 5 suggestions
    } else {
      setFilteredRecipes([]);
    }
  };

  const handleRecipeSelect = (recipe: Recipe) => {
    // Close search UI immediately
    setShowSearchInput(false);
    setSearchQuery('');
    setFilteredRecipes([]);
    
    // Navigate to recipe page
    router.push(`/recipes/${recipe.id}`);
  };

  const handleSearchClose = () => {
    setShowSearchInput(false);
    setSearchQuery('');
    setFilteredRecipes([]);
  };

  // Remove the automatic timeout - let user control when to close
  const handleSearchContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
  };

  return (
    <>
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
                      <div
                        key={item.name}
                        className="relative"
                        ref={searchRef}
                      >
                        {!showSearchInput ? (
                          <button
                            onClick={handleSearchRecipeClick}
                            className="hover:scale-105 text-2xl transform transition-all duration-200 font-gamjaflower flex items-center space-x-1"
                          >
                            <Search className="h-5 w-5 text-[#ebd489]" />
                            <span style={{ color: '#648813' }}>Search</span>
                            <span style={{ color: '#ebd489' }}>Recipe</span>
                          </button>
                        ) : (
                          <div className="flex items-center space-x-2" onClick={handleSearchContainerClick}>
                            <div className="relative">
                              <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-lg">
                                <Search className="h-4 w-4 text-gray-400 mr-2" />
                                <input
                                  type="text"
                                  placeholder="Search recipes..."
                                  value={searchQuery}
                                  onChange={handleSearchQueryChange}
                                  className="w-48 outline-none text-black text-sm"
                                  autoFocus
                                />
                                <button
                                  onClick={handleSearchClose}
                                  className="ml-2 text-gray-400 hover:text-gray-600"
                                >
                                  <X className="h-4 w-4" />
                                </button>
                              </div>

                              {/* Recipe Suggestions */}
                              {filteredRecipes.length > 0 && (
                                <div className="absolute top-12 left-0 bg-white rounded-lg shadow-lg z-50 w-full max-h-60 overflow-y-auto">
                                  {filteredRecipes.map((recipe) => (
                                    <div
                                      key={recipe.id}
                                      onClick={() => handleRecipeSelect(recipe)}
                                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black border-b border-gray-100 last:border-b-0 transition-colors"
                                    >
                                      <div className="font-medium text-sm">{recipe.name}</div>
                                      <div className="text-xs text-gray-500">
                                        {recipe.cuisine || 'Cuisine'} • {recipe.difficulty || 'Difficulty'}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* No results message */}
                              {searchQuery && filteredRecipes.length === 0 && (
                                <div className="absolute top-12 left-0 bg-white rounded-lg shadow-lg z-50 w-full">
                                  <div className="px-4 py-2 text-gray-500 text-sm">
                                    No recipes found for "{searchQuery}"
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
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

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <User2 className="h-8 w-8 text-[#ffb80e] mr-2" />
                  <button
                    onClick={handleLogout}
                    className="text-[#ffb80e] hover:text-[#ff6e0e] font-gamjaflower text-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleAuthClick('login')}
                    className="btn-secondary text-lg px-2 py-1 rounded-full border-2 border-[#ffb80e] text-[#ffb80e] hover:bg-[#ffb80e] hover:text-[#230208] transition font-gamjaflower shadow-md"
                  >
                    LOGIN
                  </button>
                  <button
                    onClick={() => handleAuthClick('signup')}
                    className="btn-primary bg-[#ffb80e] rounded-full text-lg px-2 py-1 text-[#230208] font-gamjaflower font-bold shadow-md hover:bg-[#ff6e0e] hover:text-white transition"
                  >
                    SIGN UP
                  </button>
                </>
              )}
            </div>

            {/* Mobile menu toggle */}
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
              {navItems.map((item) => {
                if (item.name === 'SearchRecipe') {
                  return (
                    <div key={item.name} className="px-3 py-2">
                      <button
                        onClick={handleSearchRecipeClick}
                        className="flex items-center space-x-2 text-white hover:text-swaad-yellow transition-colors"
                      >
                        <Search className="h-4 w-4" />
                        <span>Search Recipe</span>
                      </button>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-white hover:text-swaad-yellow transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                {user ? (
                  <>
                    <User2 className="h-8 w-8 text-[#ffb80e] mb-2" />
                    <button
                      onClick={handleLogout}
                      className="text-[#ffb80e] hover:text-[#ff6e0e] font-gamjaflower text-lg"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleAuthClick('login')}
                      className="text-center py-2 text-white hover:text-swaad-yellow transition-colors"
                    >
                      LOGIN
                    </button>
                    <button
                      onClick={() => handleAuthClick('signup')}
                      className="btn-primary text-center"
                    >
                      SIGN UP
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
          {authType === 'login' && (
            <LoginPage
              onClose={() => setShowAuth(false)}
              onSwitch={() => setAuthType('signup')}
            />
          )}
          {authType === 'signup' && (
            <SignupPage
              onClose={() => setShowAuth(false)}
              onSwitch={() => setAuthType('login')}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;