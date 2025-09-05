import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-bold">Satvify</div>
          <div className="text-sm text-gray-400">© {new Date().getFullYear()} Satvify — All rights reserved.</div>
        </div>
        <div className="text-sm text-gray-400">Made with ❤️ • Fresh ingredients • Fast delivery</div>
      </div>
    </footer>
  )
}
