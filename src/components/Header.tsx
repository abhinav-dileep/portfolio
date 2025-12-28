'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const initialDark = savedTheme === 'dark'
    setIsDark(initialDark)
    document.documentElement.classList.toggle('dark', initialDark)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    document.documentElement.classList.toggle('dark', newDark)
    localStorage.setItem('theme', newDark ? 'dark' : 'light')
  }

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black dark:text-white">Abhinav Dileep</Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/skills" className="hover:text-blue-600 transition">Skills</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Blog <FaExternalLinkAlt className="inline ml-0.25 text-xs -translate-y-1.5" /></a>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            {isDark ? '☀️' : '🌙'}
          </button>
          <button onClick={toggleMenu} className="md:hidden p-2 focus:outline-none">
            <div className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-900 dark:bg-white mt-1 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-900 dark:bg-white mt-1 transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </button>
        </div>
      </div>
      <div className={`md:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 py-2 space-y-2 text-center">
          <Link href="/" className="block py-2 hover:text-blue-600 transition text-xl" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/skills" className="block py-2 hover:text-blue-600 transition text-xl" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link href="/contact" className="block py-2 hover:text-blue-600 transition text-xl" onClick={() => setIsOpen(false)}>Contact</Link>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="block py-2 hover:text-blue-600 transition text-xl" onClick={() => setIsOpen(false)}>Blog <FaExternalLinkAlt className="inline ml-0.25 text-xs -translate-y-1.5" /></a>
        </div>
      </div>
    </header>
  )
}