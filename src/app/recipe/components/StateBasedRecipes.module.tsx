'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { indianStates } from '@/app/data/indianStates'
import { State } from '@/app/data/indianStates'

const northStateIds = [
  'punjab', 'haryana', 'himachal-pradesh', 'uttar-pradesh', 'uttarakhand', 'rajasthan', 'jammu-kashmir', 'bihar', 'chhattisgarh', 'madhya-pradesh', 'jharkhand'
]
const southStateIds = [
  'andhra-pradesh', 'telangana', 'karnataka', 'tamil-nadu', 'kerala', 'goa'
]

const northStates = indianStates.filter(state => northStateIds.includes(state.id))
const southStates = indianStates.filter(state => southStateIds.includes(state.id))
const otherStates = indianStates.filter(
  state => !northStateIds.includes(state.id) && !southStateIds.includes(state.id)
)

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center mb-10"
  >
    <h2
  className={`font-gamja font-extrabold text-3xl md:text-4xl pt-10 mb-2 tracking-tight drop-shadow bg-gradient-to-r from-[#e76f51] via-[#ffb80e] to-[#43aa8b] bg-clip-text text-transparent`}
>
  {title}
</h2>
{subtitle && (
  <p className="font-gamja bg-gradient-to-r from-[#ffb80e] via-[#ff6e0e] to-[#43aa8b] bg-clip-text text-transparent font-medium text-lg">
    {subtitle}
  </p>
)}
  </motion.div>
)

const StateGrid = ({ states }: { states: State[] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
    {states.map((state, index) => (
      <motion.div
        key={state.id}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.07 }}
        whileHover={{ scale: 1.06 }}
        className="group cursor-pointer"
      >
        <Link href={`/states/${state.id}`}>
        <div className="relative h-44 md:h-52 rounded-xl overflow-hidden shadow-md border border-orange-100 bg-white">
          <Image
            src={state.image}
            alt={`${state.name} cuisine`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-400"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
            <h3 className="font-playfair text-lg font-bold mb-0.5 drop-shadow">
              {state.name}
            </h3>
            <p className="text-xs text-orange-100 mb-1">{state.speciality}</p>
            <div className="flex items-center justify-between text-xs">
              <span className="bg-white/20 px-2 py-0.5 rounded-full">{state.recipeCount} recipes</span>
              <span className="opacity-90">Famous: <span className="font-semibold">{state.famousDish}</span></span>
            </div>
          </div>
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-swaad-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div></Link>
      </motion.div>
    ))}
  </div>
)
const StatesSection = () => {
  return (
    <section className="py-16 px-2 sm:px-4 lg:px-8 relative min-h-screen overflow-hidden">
      {/* Decorative Indian motif image as large, high-opacity background */}
      <img
        src="https://images.unsplash.com/photo-1617565084799-c4c60ea9ad7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 pointer-events-none"
        style={{ minHeight: '100%', minWidth: '100%' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* North India Section */}
        <SectionHeading
          title="Explore North Indian Tastes"
          subtitle="From creamy curries to royal street food"
        />
        <StateGrid states={northStates} />

        {/* South India Section */}
        <SectionHeading
          title="Explore South Indian Tastes"
          subtitle="Spices, coconut, and filter coffee magic"
        />
        <StateGrid states={southStates} />

        {/* Other States Section */}
        <SectionHeading
          title="Explore More Indian Flavors"
          subtitle="From the East, West, and Northeast"
        />
        <StateGrid states={otherStates} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="btn-primary text-lg px-8 py-4 rounded-full shadow-md hover:bg-swaad-orange/90 transition">
            Explore All States
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default StatesSection