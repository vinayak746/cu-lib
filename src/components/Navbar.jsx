import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes, FaUserCircle, FaBook, FaArchive } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0
    },
    open: {
      opacity: 1,
      height: "auto"
    }
  }

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="font-bold text-xl">Library MS</Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <motion.div whileHover="hover" variants={linkVariants}>
                <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
              </motion.div>
              <motion.div whileHover="hover" variants={linkVariants}>
                <Link to="/books-archive" className="hover:bg-blue-700 px-3 py-2 rounded-md flex items-center">
                  <FaArchive className="mr-1" /> Books Archive
                </Link>
              </motion.div>
              {user ? (
                <>
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <Link to="/library-access" className="hover:bg-blue-700 px-3 py-2 rounded-md flex items-center">
                      <FaBook className="mr-1" /> Check-In/Out
                    </Link>
                  </motion.div>
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <Link to="/issue-books" className="hover:bg-blue-700 px-3 py-2 rounded-md">Issue Books</Link>
                  </motion.div>
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <Link to="/return-books" className="hover:bg-blue-700 px-3 py-2 rounded-md">Return Books</Link>
                  </motion.div>
                  <motion.button
                    whileHover="hover"
                    variants={linkVariants}
                    onClick={logout}
                    className="hover:bg-blue-700 px-3 py-2 rounded-md flex items-center"
                  >
                    <FaUserCircle className="mr-1" /> Logout
                  </motion.button>
                </>
              ) : (
                <>
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <Link to="/login" className="hover:bg-blue-700 px-3 py-2 rounded-md">Login</Link>
                  </motion.div>
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <Link to="/register" className="hover:bg-blue-700 px-3 py-2 rounded-md">Register</Link>
                  </motion.div>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/books-archive" className="block hover:bg-blue-700 px-3 py-2 rounded-md flex items-center">
                <FaArchive className="mr-1" /> Books Archive
              </Link>
              {user ? (
                <>
                  <Link to="/library-access" className="block hover:bg-blue-700 px-3 py-2 rounded-md flex items-center">
                    <FaBook className="mr-1" /> Check-In/Out
                  </Link>
                  <Link to="/issue-books" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Issue Books</Link>
                  <Link to="/return-books" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Return Books</Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left hover:bg-blue-700 px-3 py-2 rounded-md flex items-center"
                  >
                    <FaUserCircle className="mr-1" /> Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Login</Link>
                  <Link to="/register" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Register</Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}