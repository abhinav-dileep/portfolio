import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed">
              I am a final year BCA student with a passion for creating beautiful and functional web applications.
              My journey in frontend development has equipped me with skills in modern technologies like React, Next.js, and TypeScript,
              along with a keen eye for design using Tailwind CSS. I love turning ideas into reality through code,
              solving complex problems, and building user-friendly interfaces. When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and sharing knowledge through writing. My goal is to create impactful digital experiences
              that make a difference in people's lives.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src="/abhi.png" alt="Profile" width={256} height={256} className="w-64 h-64 rounded-full shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}