'use client';

import { useState } from 'react';
import Link from 'next/link';

const LoginPage = ({ onSwitch, onClose }: { onSwitch: () => void; onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert('Login Successful');
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.reload();
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative max-w-md w-full bg-white text-[#230208] rounded-lg shadow-lg p-8">
        <button onClick={onClose} className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1 hover:bg-red-600">X</button>

        <div className="text-center mb-6">
          <h1 className="font-gamjaflower text-4xl font-bold">Login to <span style={{ color: '#ffb80e' }}>Swaad</span><span style={{ color: '#ff6e0e' }}>Diaries</span></h1>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffb80e]" placeholder="Enter your email" required />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffb80e]" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-[#ffb80e] text-white rounded-lg hover:bg-[#ff6e0e] transition-colors duration-200 font-bold">Login</button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">Don’t have an account? <button onClick={onSwitch} className="text-[#ffb80e] hover:underline font-medium">Sign Up</button></p>
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-[#230208] hover:text-[#ffb80e] transition-colors font-medium">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
