export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Our Library</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Welcome to our Library Management System, a state-of-the-art platform designed to make
              your library experience seamless and enjoyable. Our system combines traditional library
              services with modern technology to provide you with the best possible experience.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To provide accessible, high-quality library services to our community while fostering
              a love for learning and reading among all our members.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Our Services</h2>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Extensive collection of books, journals, and digital resources</li>
              <li>Online book reservation and renewal system</li>
              <li>Comfortable study spaces with modern amenities</li>
              <li>Digital catalog with easy search functionality</li>
              <li>Regular literary events and reading programs</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Visit Us</h2>
            <p className="text-gray-600">
              We're located in the heart of the city and are open Monday through Saturday,
              9:00 AM to 8:00 PM. Come explore our collection and experience our services
              firsthand.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}