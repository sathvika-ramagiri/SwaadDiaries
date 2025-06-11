'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar'
import StateBasedRecipes from './components/StateBasedRecipes.module';
import Footer from '@/components/Footer'

import MoodBasedRecipes from '@/app/recipe/components/MoodBasedRecipes.module.css'
import styles from '../../styles/RecipePage.module.css';
export default function RecipePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
    
   
      <StateBasedRecipes />
      <Footer id="footer" /> 
    </main>
  )
}
