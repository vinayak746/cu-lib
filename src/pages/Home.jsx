import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch, FaBook, FaHistory, FaArchive, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'

// Sample book data with ratings
const popularBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", rating: 4.5 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", rating: 4.8 },
  { id: 3, title: "1984", author: "George Orwell", genre: "Science Fiction", rating: 4.6 },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", rating: 4.7 }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-100"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-blue-600 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-4xl font-bold text-center mb-4"
          >
            Welcome to Library Management System
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center"
          >
            Discover, Learn, and Grow with Our Extensive Collection of Books
          </motion.p>
        </div>
      </motion.div>

      {/* Search and Quick Actions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search for books..."
                  className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700"
                >
                  <FaSearch className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
            <div className="flex gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/issue-books"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2"
                >
                  <FaBook /> Check-Out
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/return-books"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
                >
                  <FaBook /> Check-In
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Popular Books Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularBooks.map((book) => (
              <motion.div
                key={book.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                <p className="text-sm text-gray-500 mb-2">{book.genre}</p>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1"><FaStar /></span>
                  <span className="text-sm font-medium">{book.rating}/5</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Link to="/history" className="block">
              <div className="flex items-center mb-4">
                <FaHistory className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Borrowing History</h2>
              </div>
              <p className="text-gray-600">View your current and past book borrowings.</p>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Link to="/seat-booking" className="block">
              <div className="flex items-center mb-4">
                <FaBook className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Seat Booking</h2>
              </div>
              <p className="text-gray-600">Reserve a study space in the library.</p>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Link to="/books-archive" className="block">
              <div className="flex items-center mb-4">
                <FaArchive className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Books Archive</h2>
              </div>
              <p className="text-gray-600">Browse our complete collection of books.</p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}