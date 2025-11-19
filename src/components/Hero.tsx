'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = "Hi, I'm Abhinav Dileep"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          {text}
        </h1>
        <p className="text-xl md:text-2xl">Final Year BCA Graduate Student | Aspiring Frontend Developer</p>
      </div>
    </section>
  )
}