import Image from 'next/image';
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MoodFilters from '@/components/MoodFilters'
import FeaturedRecipes from '@/components/FeaturedRecipes'
import StatesSection from '@/components/StatesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MoodFilters />
      <FeaturedRecipes />
     <StatesSection  /> 
      <Footer id="footer" /> {/* Add id here */}
    </main>
  )
}