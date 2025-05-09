import React from 'react'

const NavLink = ({ path, label }) => (
  <a
    href={path}
    className="text-red-600 hover:text-red-800 px-4 py-2 text-sm font-medium transition-colors duration-200"
    aria-label={`Navigate to ${label}`}
  >
    {label}
  </a>
)

export default NavLink
