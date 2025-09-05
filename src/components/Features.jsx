import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Satvic Ingredients',
    desc: 'Plant-based, oil-free, sugar-free meals prepared with purity and balance.'
  },
  {
    title: 'Healing Through Food',
    desc: 'Wholesome recipes designed to restore energy, immunity, and peace of mind.'
  },
  {
    title: 'Locally Sourced Goodness',
    desc: 'Fresh, seasonal produce sourced from trusted farmers with care for nature.'
  },
  {
    title: 'Sustainable Living',
    desc: 'Eco-conscious practices and compostable packaging for a better planet.'
  }
]

export default function Features(){
  return (
    <section id="features" className="bg-white py-12">
      <div className="container">
        <h2 className="text-2xl font-bold">Why Choose Satvify</h2>
        <p className="text-gray-600 mt-2">
          Because food should heal, energize, and inspire mindful living.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 border rounded-lg bg-gray-50"
            >
              <div className="font-semibold text-lg">{f.title}</div>
              <div className="text-sm text-gray-500 mt-2">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
