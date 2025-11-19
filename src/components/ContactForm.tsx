'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' })
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', form)
    setShowModal(true)
    setForm({ name: '', email: '', mobile: '', message: '' })
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-md">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
              required
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium mb-2">Mobile</label>
            <input
              type="tel"
              id="mobile"
              value={form.mobile}
              onChange={(e) => setForm({...form, mobile: e.target.value})}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({...form, message: e.target.value})}
              rows={4}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded hover:from-blue-600 hover:to-purple-700 transition font-semibold"
          >
            Send Message
          </button>
        </form>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-sm w-full text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
              <button onClick={() => setShowModal(false)} className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}