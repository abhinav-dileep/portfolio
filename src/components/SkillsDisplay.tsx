'use client'

import { useState } from 'react'
import CircularProgress from './CircularProgress'

export default function SkillsDisplay() {
  const skills = [
    { name: 'HTML', percentage: 90, description: 'HyperText Markup Language for structuring web pages.' },
    { name: 'CSS', percentage: 85, description: 'Cascading Style Sheets for styling and layout.' },
    { name: 'JavaScript', percentage: 80, description: 'Programming language for interactive web development.' },
    { name: 'React', percentage: 75, description: 'Library for building user interfaces.' },
    { name: 'Next.js', percentage: 70, description: 'React framework for production-ready applications.' },
    { name: 'TailwindCSS', percentage: 85, description: 'Utility-first CSS framework for rapid styling.' },
  ]

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} onClick={() => setSelectedSkill(skill.name)} className="cursor-pointer transform hover:scale-105 transition">
              <CircularProgress percentage={skill.percentage} skill={skill.name} />
            </div>
          ))}
        </div>
        {selectedSkill && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full">
              <h3 className="text-2xl font-bold mb-4 text-center">{selectedSkill}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{skills.find(s => s.name === selectedSkill)?.description}</p>
              <button onClick={() => setSelectedSkill(null)} className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}