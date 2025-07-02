'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LoginPage from '@/app/auth/LoginPage';
import SignupPage from '@/app/auth/SignupPage';

const HeroSection = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup' | null>(null);

  const handleAuthClick = (type: 'login' | 'signup') => {
    setAuthType(type);
    setShowAuth(true);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#230208]/60 via-[#230208]/60 to-transparent" />

        {/* Floating Spice Elements */}
        <div className="absolute top-20 left-10 text-4xl animate-float-slow">🌶️</div>
        <div className="absolute top-32 right-20 text-3xl animate-float-medium">🧄</div>
        <div className="absolute bottom-32 left-20 text-5xl animate-float-fast">🥘</div>
        <div className="absolute bottom-20 right-16 text-4xl animate-float-medium">🫚</div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-gamjaflower text-5xl sm:text-6xl md:text-7xl font-bold text-[#ffb80e] drop-shadow-lg mb-4 leading-tight tracking-tight">
              EXPLORE
            </h1>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-gamjaflower text-3xl sm:text-4xl md:text-5xl font-medium text-[#f4f1f1] mb-8 drop-shadow"
            >
              <span className="block">
                the Different <span className="text-[#ff6e0e] font-bold">TASTES</span> of India's States
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-12 font-light drop-shadow"
          >
            Select recipes according to your cravings and discover the stories behind every flavor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => handleAuthClick('login')}
              className="btn-secondary text-lg px-8 py-4 rounded-full border-2 border-[#ffb80e] text-[#ffb80e] hover:bg-[#ffb80e] hover:text-[#230208] transition font-gamjaflower shadow-md"
            >
              LOGIN
            </button>
            <button
              onClick={() => handleAuthClick('signup')}
              className="btn-primary bg-[#ffb80e] rounded-full text-lg px-8 py-4 text-[#230208] font-gamjaflower font-bold shadow-md hover:bg-[#ff6e0e] hover:text-white transition"
            >
              SIGN UP
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <div className="w-1 h-16 bg-white/50 rounded-full mx-auto mb-2"></div>
              <p className="text-white/70 text-sm font-gamjaflower">Scroll to explore</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Login/Signup Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
          {authType === 'login' && (
  <LoginPage
    onClose={() => setShowAuth(false)}
    onSwitch={() => setAuthType('signup')} // Switch to Signup
  />
)}
{authType === 'signup' && (
  <SignupPage
    onClose={() => setShowAuth(false)}
    onSwitch={() => setAuthType('login')} // Switch to Login
  />
)}

        </div>
      )}
    </>
  );
};

export default HeroSection;
