'use client';

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Heart, MessageCircle, Share2, Users, Camera, Star, Trophy, BookOpen } from 'lucide-react'

export default function Community() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to the <span className="text-orange-600">
              <span style={{ color: '#ffb80e' }}>Swaad</span>
              <span style={{ color: '#ff6e0e' }}>Diaries</span>
            </span> Community
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of food lovers sharing their culinary adventures, family recipes, and cultural stories from across India
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Camera className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">25K+</div>
              <div className="text-gray-600">Recipes Shared</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <BookOpen className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Food Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Makes Our Community Special
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-orange-50">
              <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Share Your Heritage</h3>
              <p className="text-gray-600">
                Connect with your roots by sharing traditional family recipes and the stories behind them
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Learn & Discuss</h3>
              <p className="text-gray-600">
                Get cooking tips, ask questions, and learn from experienced home cooks across India
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <Share2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Discover New Flavors</h3>
              <p className="text-gray-600">
                Explore regional cuisines and discover hidden gems from every corner of the country
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Community Posts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Community Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Rajasthani Dal Baati</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-800 font-semibold">P</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Priya Sharma</h4>
                    <p className="text-sm text-gray-500">Jaipur, Rajasthan</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "My grandmother's secret recipe for the perfect dal baati - passed down through 4 generations!"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-red-600">
                      <Heart className="w-4 h-4 mr-1" />
                      <span>284</span>
                    </button>
                    <button className="flex items-center text-blue-600">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>47</span>
                    </button>
                  </div>
                  <div className="flex items-center text-yellow-600">
                    <Star className="w-4 h-4 mr-1" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Bengali Fish Curry</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-800 font-semibold">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ananya Das</h4>
                    <p className="text-sm text-gray-500">Kolkata, West Bengal</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "The authentic way to make macher jhol that will transport you to Bengal with every bite!"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-red-600">
                      <Heart className="w-4 h-4 mr-1" />
                      <span>312</span>
                    </button>
                    <button className="flex items-center text-blue-600">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>63</span>
                    </button>
                  </div>
                  <div className="flex items-center text-yellow-600">
                    <Star className="w-4 h-4 mr-1" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">South Indian Dosa</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-800 font-semibold">R</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ravi Kumar</h4>
                    <p className="text-sm text-gray-500">Chennai, Tamil Nadu</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Master the art of making paper-thin dosas with this step-by-step guide from my amma!"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-red-600">
                      <Heart className="w-4 h-4 mr-1" />
                      <span>456</span>
                    </button>
                    <button className="flex items-center text-blue-600">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>89</span>
                    </button>
                  </div>
                  <div className="flex items-center text-yellow-600">
                    <Star className="w-4 h-4 mr-1" />
                    <span>4.7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Challenges */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Monthly Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white">
              <Trophy className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Regional Recipe Challenge</h3>
              <p className="mb-4">
                This month: Share your favorite Punjabi recipe! Winners get featured on our homepage and receive exclusive Swaaddiaries merchandise.
              </p>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join Challenge
              </button>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 text-white">
              <Camera className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Food Photography Contest</h3>
              <p className="mb-4">
                Show off your food photography skills! Best photo wins a professional cooking session with a celebrity chef.
              </p>
              <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Submit Photo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Food Family?</h2>
          <p className="text-xl mb-8">
            Share your recipes, learn from others, and be part of India's largest food community
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Sign Up Free
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer id="footer" />
    </main>
  )
}