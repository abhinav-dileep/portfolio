import { FaGithub, FaLinkedin, FaMediumM } from 'react-icons/fa'

export default function SocialMedia() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Connect with Me</h2>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">Let's stay in touch on social media</p>
        <div className="flex justify-center space-x-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition">
            <FaLinkedin />
          </a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition">
            <FaMediumM />
          </a>
        </div>
      </div>
    </section>
  )
}