import { useState } from 'react'
import { toast } from 'react-toastify'

export default function SeatBooking() {
  const [bookingDetails, setBookingDetails] = useState({
    seatNumber: '',
    date: '',
    startTime: '',
    endTime: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement seat booking logic
    toast.success('Seat booked successfully!')
  }

  // Mock data for available seats
  const availableSeats = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    number: `A${i + 1}`,
    status: Math.random() > 0.3 ? 'available' : 'occupied'
  }))

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Seat Booking</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Seats</h2>
              <div className="grid grid-cols-5 gap-4">
                {availableSeats.map((seat) => (
                  <button
                    key={seat.id}
                    onClick={() => setBookingDetails({...bookingDetails, seatNumber: seat.number})}
                    disabled={seat.status === 'occupied'}
                    className={`p-4 text-center rounded-lg ${
                      seat.status === 'available'
                        ? 'bg-blue-100 hover:bg-blue-200 text-blue-800'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    } ${bookingDetails.seatNumber === seat.number ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    {seat.number}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Booking Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="seatNumber" className="block text-sm font-medium text-gray-700">
                    Selected Seat
                  </label>
                  <input
                    type="text"
                    id="seatNumber"
                    value={bookingDetails.seatNumber}
                    readOnly
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={bookingDetails.date}
                    onChange={(e) => setBookingDetails({...bookingDetails, date: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
                    Start Time
                  </label>
                  <input
                    type="time"
                    id="startTime"
                    value={bookingDetails.startTime}
                    onChange={(e) => setBookingDetails({...bookingDetails, startTime: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
                    End Time
                  </label>
                  <input
                    type="time"
                    id="endTime"
                    value={bookingDetails.endTime}
                    onChange={(e) => setBookingDetails({...bookingDetails, endTime: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!bookingDetails.seatNumber}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Book Seat
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}