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
      className="text-gray-700 hover:text-black px-4 py-2 text-sm font-medium transition-colors duration-200"
      aria-label={`Navigate to ${label}`}
    >
      {label}
    </a>
  )

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-200 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <h1
            className="text-gray-900 text-xl font-semibold tracking-tight cursor-pointer"
            tabIndex="0"
            aria-label="Filmpire Logo"
          >
            Filmpire
          </h1>
        </div>
        <div className="flex space-x-6">
          {navLinks.map(link => (
            <NavLink key={link.path} {...link} />
          ))}
        </div>
      </div>
    </nav>
  )
}
