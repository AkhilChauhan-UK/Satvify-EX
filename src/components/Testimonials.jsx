import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Ananya Mehta',
    text: 'Switching to Satvic meals has boosted my energy and improved digestion. Grateful for Satvify!'
  },
  {
    id: 2,
    name: 'Rohit Kapoor',
    text: 'Never knew oil-free food could taste so good. Perfect for my wellness journey.'
  },
  {
    id: 3,
    name: 'Kavita Sharma',
    text: 'Satvify makes healthy eating simple and joyful. My whole family loves it — even the kids!'
  },
  {
    id: 4,
    name: 'Aarav Joshi',
    text: 'Finally a food service that aligns with yoga and wellness principles — pure, mindful, and nourishing.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="container py-12 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-bold">Voices of Our Satvic Community</h3>
      <p className="text-gray-600 mt-2">
        Discover how Satvify meals bring balance, healing, and joy to everyday lives.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="p-6 bg-white border rounded-lg shadow-sm"
          >
            <div className="text-sm text-gray-600 italic">"{t.text}"</div>
            <div className="mt-4 font-semibold text-indigo-700">— {t.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
