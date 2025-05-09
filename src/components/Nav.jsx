import React, { useEffect, useState } from 'react'
import { navLinks } from '../data/data'
import NavLink from './utils/NavLink'

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full bg-red-50 bg-opacity-90 backdrop-blur-md border-b border-red-200 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <h1
            className="text-red-900 text-xl font-semibold tracking-tight cursor-pointer"
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
export default Nav
