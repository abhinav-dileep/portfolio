'use client'

import { useState, useEffect } from 'react'

export default function Stats() {
  const [experience, setExperience] = useState(0)
  const [projects, setProjects] = useState(0)
  const [skills, setSkills] = useState(0)

  useEffect(() => {
    const animateCounter = (setter: (value: number) => void, target: number, duration: number) => {
      let start = 0
      const increment = target / (duration / 50)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(start))
        }
      }, 50)
    }

    animateCounter(setExperience, 3, 2000)
    animateCounter(setProjects, 5, 2000)
    animateCounter(setSkills, 10, 2000)
  }, [])

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">{experience}+</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">Years of Experience</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">{projects}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">Projects Completed</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-blue-500 mb-2">{skills}+</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">Skills Mastered</p>
          </div>
        </div>
      </div>
    </section>
  )
}