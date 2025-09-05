import React, { useState } from 'react'
import DishCard from './DishCard'

/**
 * MenuHighlights (updated)
 * - Unique ids for dishes
 * - Shows first 3 items by default
 * - "View full menu" button toggles to show all (and toggles to "Show less")
 * - Keeps using reusable DishCard component
 */

const dishes = [
  {
    id: 1,
    name: "Basil Seeds",
    desc: "From their cooling properties to their amazing health benefits, you'll be surprised what these tiny powerhouses can do for your well-being.",
    img: "https://media.istockphoto.com/id/970956876/photo/chia-seeds-in-wooden-spoon-and-basil-leaf-on-wooden-background-super-food-healthy-eating.jpg?s=612x612&w=0&k=20&c=buxMvtv18AAIK3dCtw_4Ci1Dw5likTdprVapYNSQQMU="
  },
  {
    id: 2,
    name: "Chia Seeds",
    desc: "From plant-powered protein to omega-3 goodness and natural detox benefits, these tiny black seeds are loaded with nutrients your body craves.",
    img: "https://media.istockphoto.com/id/886500980/photo/healthy-chia-seeds-in-a-glass-jar.jpg?s=612x612&w=0&k=20&c=YGevobKnx4oiljjuy2T4p7ELvE9XpTgqniDTfKT1ebI="
  },
  {
    id: 3,
    name: "Turmeric",
    desc: "From boosting immunity and fighting inflammation to supporting joint health and enhancing skin quality, turmeric is much more than just a kitchen ingredient — it’s ancient wisdom in modern life.",
    img: "https://media.istockphoto.com/id/1255965862/photo/turmeric-powder-and-fresh-turmeric-root-on-grey-concrete-background.jpg?s=612x612&w=0&k=20&c=Rd0jTRlUz6CjsxKwL761m00KXGlidKWSeBITPbY-_dM="
  },
  {
    id: 4,
    name: "Amla",
    desc: "From boosting immunity and enhancing skin glow to improving digestion and being a natural detoxifier, amla has been trusted for centuries in Ayurveda as a true wellness powerhouse.",
    img: "https://media.istockphoto.com/id/1071033312/photo/top-view-of-indian-gooseberry-juice-on-the-wooden-floor.jpg?s=612x612&w=0&k=20&c=FJYXgA6XIa-eJwSozNsnqDZUF2-dJgjHYmYWGw5O10c="
  },
  {
    id: 5,
    name: "Cardamom",
    desc: "From supporting digestion and freshening breath to calming the mind and detoxifying the body, cardamom has been a timeless staple in Ayurveda for good reason.",
    img: "https://media.istockphoto.com/id/518709136/photo/green-cardamom-pods-in-steel-bowl.jpg?s=612x612&w=0&k=20&c=uMfiFWLROWcsyeqG6zcUQb83nxo6VI5_o7aCQUiEmpw="
  },
  {
    id: 6,
    name: "Fennel Seeds",
    desc: "From aiding digestion and freshening breath to detoxifying the body and calming the mind, fennel seeds have been an Ayurvedic favorite for centuries.",
    img: "https://media.istockphoto.com/id/516283022/photo/raw-organic-fennel-seed.jpg?s=612x612&w=0&k=20&c=8sxBU2cQHzVe0zrNHwL8rbFcnz_N_rOWS_RO893zLDY="
  },
]

export default function MenuHighlights(){
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? dishes : dishes.slice(0, 3)

  return (
    <section id="menu" className="container py-12">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">🌱 Satvic Essentials</h3>
          <p className="text-gray-600">Healing, plant-based foods carefully selected to bring balance, purity, and nourishment to your lifestyle.</p>
        </div>

        <button
          onClick={() => setShowAll(v => !v)}
          className="text-indigo-600 hover:underline"
          aria-expanded={showAll}
          aria-controls="menu-grid"
        >
          {showAll ? 'Show less' : 'View full menu →'}
        </button>
      </div>

      <div id="menu-grid" className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map(d => (
          <DishCard
            key={d.id}
            id={d.id}
            name={d.name}
            desc={d.desc}
            img={d.img}
            // price={d.price} // uncomment if DishCard supports price
          />
        ))}
      </div>
    </section>
  )
}
