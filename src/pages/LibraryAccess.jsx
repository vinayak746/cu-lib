import { useState } from 'react'
import { motion } from 'framer-motion'
import QRScanner from '../components/QRScanner'
import { useAuth } from '../contexts/AuthContext'
import { toast } from 'react-toastify'

export default function LibraryAccess() {
  const { user } = useAuth()
  const [lastScan, setLastScan] = useState(null)

  const handleScan = (data) => {
    setLastScan(data)
    if (data.type === 'issue') {
      toast.success('Welcome to the library! Book check-out recorded.')
    } else if (data.type === 'return') {
      toast.success('Thank you for visiting! Book return recorded.')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-100 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Library Access</h1>
          
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">
                Please scan your QR code to check-in or check-out books
              </p>
              <QRScanner onScanSuccess={handleScan} />
            </div>

            {lastScan && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-4 bg-gray-50 rounded-lg"
              >
                <h2 className="text-xl font-semibold mb-2">Last Scan Details</h2>
                <div className="space-y-2">
                  <p><span className="font-medium">Type:</span> {lastScan.type}</p>
                  <p><span className="font-medium">Book ID:</span> {lastScan.bookId}</p>
                  <p><span className="font-medium">Time:</span> {new Date(lastScan.timestamp).toLocaleString()}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}