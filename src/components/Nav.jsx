import React, { useEffect, useState } from 'react'

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/movies', label: 'Movies' },
    { path: '/categories', label: 'Categories' },
    { path: '/search', label: 'Search' }
  ]

  const NavLink = ({ path, label }) => (
    <a
      href={path}
      className="text-red-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
      aria-label={`Navigate to ${label}`}
    >
      {label}
    </a>
  )

  return (
    <nav
      aria-label="Main Navigation"
      className={`bg-gradient-to-r from-red-900 via-red-700 to-red-500 p-4 shadow-lg transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1
            className="text-white text-2xl font-bold hover:text-red-300 transition-colors duration-200 cursor-pointer"
            tabIndex="0"
            aria-label="Filmpire Logo"
          >
            Filmpire
          </h1>
        </div>
        <div className="flex space-x-4">
          {navLinks.map(link => (
            <NavLink key={link.path} {...link} />
          ))}
        </div>
      </div>
    </nav>
  )
}
