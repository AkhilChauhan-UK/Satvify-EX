import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import MenuHighlights from '../components/MenuHighlights'
import Footer from '../components/Footer'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home(){
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <MenuHighlights />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
