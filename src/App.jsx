import { useState, useEffect } from 'react'
export default function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  return (
    <nav
      className={`bg-gray-800 p-4 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold animate-slideIn">
            Filmpire
          </h1>
        </div>
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium animate-slideIn"
            style={{ animationDelay: '0.1s' }}
          >
            Home
          </a>
          <a
            href="/movies"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium animate-slideIn"
            style={{ animationDelay: '0.2s' }}
          >
            Movies
          </a>
          <a
            href="/categories"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium animate-slideIn"
            style={{ animationDelay: '0.3s' }}
          >
            Categories
          </a>
          <a
            href="/search"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium animate-slideIn"
            style={{ animationDelay: '0.4s' }}
          >
            Search
          </a>
        </div>
      </div>
    </nav>
  )
}
