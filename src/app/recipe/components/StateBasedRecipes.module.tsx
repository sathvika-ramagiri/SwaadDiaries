'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { indianStates } from '@/app/data/indianStates'
import { State } from '@/app/data/indianStates'

const northStateIds = ['punjab', 'haryana', 'himachal-pradesh', 'uttar-pradesh', 'uttarakhand', 'rajasthan', 'jammu-kashmir', 'bihar', 'chhattisgarh', 'madhya-pradesh', 'jharkhand']
const southStateIds = ['andhra-pradesh', 'telangana', 'karnataka', 'tamil-nadu', 'kerala', 'goa']

const northStates = indianStates.filter(state => northStateIds.includes(state.id))
const southStates = indianStates.filter(state => southStateIds.includes(state.id))
const otherStates = indianStates.filter(state => !northStateIds.includes(state.id) && !southStateIds.includes(state.id))

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center mb-10"
  >
    <h2 className="font-gamja font-extrabold text-3xl md:text-4xl pt-10 mb-2 tracking-tight text-[#5C2C0C]">
      {title}
    </h2>
    {subtitle && (
      <p className="font-gamja text-[#d97706] font-medium text-lg">
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
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <h3 className="font-playfair text-lg font-bold mb-0.5 drop-shadow">{state.name}</h3>
              <p className="text-xs text-orange-100 mb-1">{state.speciality}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="bg-white/20 px-2 py-0.5 rounded-full">{state.recipeCount} recipes</span>
                <span className="opacity-90">Famous: <span className="font-semibold">{state.famousDish}</span></span>
              </div>
            </div>
            <div className="absolute inset-0 bg-swaad-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>
      </motion.div>
    ))}
  </div>
)

const StatesSection = () => {
  return (
    <section className="py-16 px-2 sm:px-4 lg:px-8 relative min-h-screen overflow-hidden">
      <div className="relative z-9 max-w-7xl mx-auto">
        
        {/* North India Section */}
        <div className="rounded-2xl bg-[#fdebd0]/50 p-6 mb-14">
          <SectionHeading
            title="Explore North Indian Tastes"
            subtitle="From creamy curries to royal street food"
          />
          <StateGrid states={northStates} />
        </div>

        {/* South India Section */}
        <div className="rounded-2xl bg-[#fef9e7]/50 p-6 mb-14">
          <SectionHeading
            title="Explore South Indian Tastes"
            subtitle="Spices, coconut, and filter coffee magic"
          />
          <StateGrid states={southStates} />
        </div>

        {/* Other States Section */}
        <div className="rounded-2xl bg-[#eafaf1]/50 p-6 mb-14">
          <SectionHeading
            title="Explore More Indian Flavors"
            subtitle="From the East, West, and Northeast"
          />
          <StateGrid states={otherStates} />
        </div>

        {/* Button */}
     <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="flex justify-end mt-12"
>
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-lg hover:shadow-xl transition"
    aria-label="Scroll to top"
  >
    ↑
  </button>
</motion.div>



      </div>
    </section>
  )
}

export default StatesSection
