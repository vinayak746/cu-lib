export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Library Management System</h3>
            <p className="text-sm">Your one-stop solution for managing library resources efficiently.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm hover:text-blue-200">About Us</a></li>
              <li><a href="/contact" className="text-sm hover:text-blue-200">Contact</a></li>
              <li><a href="/seat-booking" className="text-sm hover:text-blue-200">Seat Booking</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: library@example.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Library Street</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-blue-500 text-center text-sm">
          © {new Date().getFullYear()} Library Management System. All rights reserved.
        </div>
      </div>
    </footer>
  )
}