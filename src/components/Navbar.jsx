import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white font-semibold px-3 py-2 rounded-md text-lg">Satvify</div>
          <span className="text-sm text-gray-500 hidden sm:inline">Food & Beverage Services</span>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#menu" className="hover:text-indigo-600">Products</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <button className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-md">Order Now</button>
        </nav>

        <div className="md:hidden">
          <button aria-label="menu" onClick={() => setOpen(v=>!v)} className="p-2 rounded-md border">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu animated with Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#features" onClick={() => setOpen(false)} className="py-2">Features</a>
              <a href="#menu" onClick={() => setOpen(false)} className="py-2">Menu</a>
              <a href="#about" onClick={() => setOpen(false)} className="py-2">About</a>
              <a href="#contact" onClick={() => setOpen(false)} className="py-2">Contact</a>
              <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md">Order Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
