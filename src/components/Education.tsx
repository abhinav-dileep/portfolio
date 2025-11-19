export default function Education() {
  const educations = [
    { title: 'BCA Degree', institution: 'National College, Bengaluru', year: '2026', description: 'Bachelor of Computer Applications' },
    { title: 'Plus Two', institution: 'GHSS Palayad, Kannur', year: '2019', description: 'Higher Secondary Education' },
    { title: 'SSLC', institution: "St. Joseph's HSS, Kannur", year: '2017', description: 'Secondary School Leaving Certificate' },
  ]

  return (
    <section className="py-20 bg-blue-50 dark:bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Education</h2>
        <div className="relative max-w-2xl mx-auto">
          {educations.map((edu, index) => (
            <div key={index} className="flex items-start mb-8 relative">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-6 mt-2 flex-shrink-0"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-1">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.year}</p>
                <p className="text-sm">{edu.description}</p>
              </div>
            </div>
          ))}
          <div className="absolute left-2 top-6 bottom-6 w-0.5 bg-blue-500"></div>
        </div>
      </div>
    </section>
  )
}