import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="container py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">About Us</div>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight">
            Welcome to <span className="text-indigo-600">Satvify</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Do you have a passion for healthy living or vegan cuisine? If so, you're in the right place! At Satvify, we're not just about serving food; we're crafting a lifestyle revolution.
          </p>

          <h3 className="mt-6 text-lg font-semibold">Our Name</h3>
          <p className="text-gray-600 mt-2">
            Derived from the Sanskrit word <strong>"Satv"</strong> (purity and goodness) and the suffix <strong>"fy"</strong> (satisfaction and fulfilment), Satvify represents our commitment to satisfying hunger, nourishing the body, and nurturing the soul with <strong>Satvic food</strong>.
          </p>

          <h3 className="mt-6 text-lg font-semibold">What we do</h3>
          <p className="text-gray-600 mt-2">
            We believe in the transformative power of wholesome, plant-based, sugar-free, oil-free, and minimally cooked Satvic meals. Our mission is simple yet profound:
          </p>

          <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
            <li>Make healthy eating delicious, accessible, and irresistible.</li>
            <li>Provide meals that heal the body and mind while delighting the taste buds.</li>
            <li>Celebrate nature’s bounty with every dish — joy, vitality, and balance.</li>
          </ul>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="font-semibold">Vision</div>
              <div className="text-sm text-gray-500 mt-2">
                A world inspired by Satvic principles — promoting holistic well-being, sustainability, and compassionate living.
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="font-semibold">Mission</div>
              <div className="text-sm text-gray-500 mt-2">
                Make life-transforming, plant-based Satvic food accessible to all — meals that nourish the body, delight the senses, and nurture the soul.
              </div>
            </div>
          </div>

         
        </motion.div>

        {/* Image / visual column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
            <img
              alt="Satvify - healthy satvic food"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
              className="w-full h-72 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
