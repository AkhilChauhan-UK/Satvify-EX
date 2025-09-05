import React from 'react'

/**
 * DishCard - single reusable card component for a menu item
 * Props:
 *  - name (string)
 *  - price (number)
 *  - desc (string)
 *  - img (string) : image URL
 */
export default function DishCard({ name, price, desc, img }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        alt={name}
        src={img}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500 mt-2">{desc}</div>
        <div className="mt-4 flex items-center justify-between">
          {/* <div className="font-bold">₹{price}</div> */}
          <button className="px-3 py-1 rounded-md border">Add</button>
        </div>
      </div>
    </div>
  )
}
