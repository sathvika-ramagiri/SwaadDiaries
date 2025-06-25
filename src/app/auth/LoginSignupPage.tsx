'use client';

import { useState } from 'react';
import Link from 'next/link';

const LoginSignupPage = ({ onClose }: { onClose: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative max-w-md w-full bg-white text-[#230208] rounded-lg shadow-lg p-8">
        {/* Close Button */}
        <button
          onClick={onClose} // Call the onClose function passed as a prop
          className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1 hover:bg-red-600"
        >
          X
        </button>

        {/* Title */}
<div className="text-center mb-6">
  <h1 className="font-gamjaflower text-4xl font-bold">
    Login to <span style={{ color: '#ffb80e' }}>Swaad</span>
    <span style={{ color: '#ff6e0e' }}>Diaries</span>
  </h1>
</div>

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffb80e]"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffb80e]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffb80e]"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#ffb80e] text-white rounded-lg hover:bg-[#ff6e0e] transition-colors duration-200 font-bold"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#ffb80e] hover:underline font-medium"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>

        <div className="text-center mt-6">
          <a
  href="/"
  className="text-[#230208] hover:text-[#ffb80e] transition-colors font-medium"
>
  Back to Home
</a>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;