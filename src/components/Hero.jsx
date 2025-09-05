import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 gap-10 py-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Plant-based Satvic meals, crafted to heal and nourish <span className="text-indigo-600">— Satvify</span></h1>
        <p className="mt-6 text-gray-600 max-w-xl">Satvify brings you wholesome, oil-free, sugar-free, and minimally cooked Satvic food — meals designed not just to satisfy hunger but to restore balance, energy, and peace. From our kitchen to your table, every bite is a step towards vibrant health and mindful living.</p>

        <div className="mt-8 flex gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow">Order Now</button>
          <a className="px-6 py-3 rounded-md border border-gray-200" href="#menu">See Menu</a>
        </div>

        <div className="mt-8 flex items-center gap-6">
          <div>
            <div className="text-2xl font-bold">4.8/5</div>
            <div className="text-sm text-gray-500">Customer rating</div>
          </div>
          <div>
            <div className="text-2xl font-bold">30+</div>
            <div className="text-sm text-gray-500">Cities served</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center md:justify-end"
      >
        <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
          <img alt="Delicious food" src="https://media.istockphoto.com/id/168738383/photo/spices.jpg?s=612x612&w=0&k=20&c=EHn1AqYjfKtdMBcrWVuEEs9uDErJrMBJTplVE7P3_Fw=" className="w-full h-72 object-cover" />
        </div>
      </motion.div>
    </section>
  )
}
