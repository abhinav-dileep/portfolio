'use client'

import { useState, useEffect, useRef } from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiGit } from 'react-icons/si'

export default function TechMarquee() {
  const [offset, setOffset] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const marqueeRef = useRef<HTMLDivElement>(null)

  const icons = [
    <FaReact key="react" className="text-6xl text-blue-500" title="React" />,
    <SiNextdotjs key="next" className="text-6xl text-black dark:text-white" title="Next.js" />,
    <SiTypescript key="ts" className="text-6xl text-blue-600" title="TypeScript" />,
    <SiTailwindcss key="tailwind" className="text-6xl text-teal-500" title="Tailwind CSS" />,
    <FaNodeJs key="node" className="text-6xl text-green-500" title="Node.js" />,
    <SiMongodb key="mongo" className="text-6xl text-green-600" title="MongoDB" />,
    <FaHtml5 key="html" className="text-6xl text-orange-500" title="HTML5" />,
    <FaCss3Alt key="css" className="text-6xl text-blue-400" title="CSS3" />,
    <FaJs key="js" className="text-6xl text-yellow-500" title="JavaScript" />,
    <SiGit key="git" className="text-6xl text-orange-600" title="Git" />
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setOffset(prev => {
          if (marqueeRef.current) {
            const width = marqueeRef.current.scrollWidth / 2
            return prev <= -width ? 0 : prev - 1
          }
          return prev - 1
        })
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Technologies I ❤️ To Work With</h2>
      </div>
      <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div
          ref={marqueeRef}
          className="flex"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {icons.map((icon, index) => (
            <div key={index} className="flex-shrink-0 mx-6">
              {icon}
            </div>
          ))}
          {icons.map((icon, index) => (
            <div key={`dup-${index}`} className="flex-shrink-0 mx-6">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}