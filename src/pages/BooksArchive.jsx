import { useState } from 'react'
import { FaSearch, FaFilter } from 'react-icons/fa'

// Sample books data
const booksData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: [
    "The Great Gatsby", "To Kill a Mockingbird", "1984", "Pride and Prejudice",
    "The Catcher in the Rye", "One Hundred Years of Solitude", "Brave New World",
    "The Lord of the Rings", "The Hobbit", "Fahrenheit 451"
  ][index % 10],
  author: [
    "F. Scott Fitzgerald", "Harper Lee", "George Orwell", "Jane Austen",
    "J.D. Salinger", "Gabriel García Márquez", "Aldous Huxley",
    "J.R.R. Tolkien", "J.R.R. Tolkien", "Ray Bradbury"
  ][index % 10],
  genre: [
    "Classic", "Fiction", "Science Fiction", "Romance",
    "Coming-of-age", "Magical Realism", "Science Fiction",
    "Fantasy", "Fantasy", "Science Fiction"
  ][index % 10],
  cover: [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=200",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=200"
  ][index % 3],
  publishedYear: 1900 + Math.floor(Math.random() * 123),
  rating: (Math.random() * 2 + 3).toFixed(1)
}))

export default function BooksArchive() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [sortBy, setSortBy] = useState('title')

  const genres = ['All', ...new Set(booksData.map(book => book.genre))]

  const filteredBooks = booksData
    .filter(book => 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(book => selectedGenre === 'All' || book.genre === selectedGenre)
    .sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title)
      if (sortBy === 'author') return a.author.localeCompare(b.author)
      if (sortBy === 'year') return b.publishedYear - a.publishedYear
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Books Archive</h1>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search by title or author..."
                  className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700">
                  <FaSearch className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="title">Sort by Title</option>
                <option value="author">Sort by Author</option>
                <option value="year">Sort by Year</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={book.cover} alt={book.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">{book.genre}</span>
                  <span className="text-sm text-gray-500">{book.publishedYear}</span>
                </div>
                <div className="mt-2 text-sm text-yellow-500">
                  Rating: {book.rating} / 5
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}