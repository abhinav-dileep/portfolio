'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Projects() {
  const originalProjects = [
    { title: 'E-commerce Website', image: 'https://via.placeholder.com/400x300', tech: ['React', 'Node.js', 'MongoDB'], description: 'A full-stack e-commerce platform with payment integration and user authentication.' },
    { title: 'Portfolio Site', image: 'https://via.placeholder.com/400x300', tech: ['Next.js', 'TailwindCSS'], description: 'Personal portfolio website showcasing projects and skills.' },
    { title: 'Task Manager', image: 'https://via.placeholder.com/400x300', tech: ['React', 'Firebase'], description: 'A productivity app for managing tasks with real-time updates.' },
    { title: 'Weather App', image: 'https://via.placeholder.com/400x300', tech: ['JavaScript', 'OpenWeather API'], description: 'Real-time weather application with location-based forecasts.' },
    { title: 'Blog Platform', image: 'https://via.placeholder.com/400x300', tech: ['Next.js', 'MongoDB', 'Auth0'], description: 'A blogging platform with user authentication and content management.' },
    { title: 'Social Media Dashboard', image: 'https://via.placeholder.com/400x300', tech: ['Vue.js', 'Express', 'PostgreSQL'], description: 'Dashboard for managing multiple social media accounts with analytics.' },
    { title: 'Fitness Tracker', image: 'https://via.placeholder.com/400x300', tech: ['React Native', 'Firebase'], description: 'Mobile app for tracking workouts and nutrition with progress charts.' },
    { title: 'Recipe Finder', image: 'https://via.placeholder.com/400x300', tech: ['Angular', 'Node.js', 'MongoDB'], description: 'Web app for discovering recipes based on ingredients and dietary preferences.' },
    { title: 'Chat Application', image: 'https://via.placeholder.com/400x300', tech: ['Socket.io', 'React', 'Express'], description: 'Real-time chat app with private messaging and group chat features.' },
    { title: 'Data Visualization Tool', image: 'https://via.placeholder.com/400x300', tech: ['D3.js', 'Python', 'Flask'], description: 'Interactive dashboard for visualizing complex datasets with customizable charts.' },
    { title: 'Learning Management System', image: 'https://via.placeholder.com/400x300', tech: ['Laravel', 'MySQL', 'Vue.js'], description: 'Platform for online courses with video streaming and progress tracking.' },
    { title: 'Music Streaming App', image: 'https://via.placeholder.com/400x300', tech: ['React', 'Node.js', 'AWS'], description: 'Music streaming service with playlist management and audio processing.' },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Recent College Projects</h2>
      </div>
      <button className="swiper-button-prev absolute left-[30%] top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition shadow-md">
        <FaChevronLeft />
      </button>
      <div className="max-w-[60%] mx-auto px-4 sm:px-8 md:px-16">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={2}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop
          centerInsufficientSlides={true}
        >
          {originalProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md w-full max-w-[320px] h-[400px] flex flex-col">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t) => <span key={t} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">{t}</span>)}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 flex-grow">{project.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="swiper-button-next absolute right-[30%] top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition shadow-md">
        <FaChevronRight />
      </button>
    </section>
  )
}