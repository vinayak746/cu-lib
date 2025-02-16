import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import IssueBooks from './pages/IssueBooks'
import ReturnBooks from './pages/ReturnBooks'
import History from './pages/History'
import SeatBooking from './pages/SeatBooking'
import BooksArchive from './pages/BooksArchive'
import LibraryAccess from './pages/LibraryAccess'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  if (!user) {
    return <Navigate to="/login" />
  }
  return children
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books-archive" element={<BooksArchive />} />
          
          {/* Protected Routes */}
          <Route path="/admin" element={
            <ProtectedRoute><Admin /></ProtectedRoute>
          } />
          <Route path="/issue-books" element={
            <ProtectedRoute><IssueBooks /></ProtectedRoute>
          } />
          <Route path="/return-books" element={
            <ProtectedRoute><ReturnBooks /></ProtectedRoute>
          } />
          <Route path="/history" element={
            <ProtectedRoute><History /></ProtectedRoute>
          } />
          <Route path="/seat-booking" element={
            <ProtectedRoute><SeatBooking /></ProtectedRoute>
          } />
          <Route path="/library-access" element={
            <ProtectedRoute><LibraryAccess /></ProtectedRoute>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App