import { useState } from 'react'
import { toast } from 'react-toastify'
import { QRCodeSVG } from 'qrcode.react'
import { motion } from 'framer-motion'

export default function ReturnBooks() {
  const [returnDetails, setReturnDetails] = useState({
    bookId: '',
    userId: '',
    returnDate: ''
  })

  const [qrData, setQrData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Generate QR code data
    const qrCodeData = {
      type: 'return',
      bookId: returnDetails.bookId,
      userId: returnDetails.userId,
      returnDate: returnDetails.returnDate,
      timestamp: new Date().toISOString()
    }
    setQrData(JSON.stringify(qrCodeData))
    toast.success('Book returned successfully! QR code generated.')
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Return Books</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.form
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="bookId" className="block text-sm font-medium text-gray-700">
                  Book ID
                </label>
                <input
                  type="text"
                  id="bookId"
                  value={returnDetails.bookId}
                  onChange={(e) => setReturnDetails({...returnDetails, bookId: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
                  User ID
                </label>
                <input
                  type="text"
                  id="userId"
                  value={returnDetails.userId}
                  onChange={(e) => setReturnDetails({...returnDetails, userId: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">
                  Return Date
                </label>
                <input
                  type="date"
                  id="returnDate"
                  value={returnDetails.returnDate}
                  onChange={(e) => setReturnDetails({...returnDetails, returnDate: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Return Book
              </motion.button>
            </motion.form>

            <motion.div
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              className="flex flex-col items-center justify-center"
            >
              {qrData ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center"
                >
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <QRCodeSVG value={qrData} size={256} />
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    Scan this QR code when returning the book
                  </p>
                </motion.div>
              ) : (
                <div className="text-center text-gray-500">
                  <p>Fill out the form to generate a QR code</p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}