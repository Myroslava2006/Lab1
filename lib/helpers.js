import dbConnect from './db'
import Book from './models/Book'

export async function getBookStats() {
  await dbConnect()

  const books = await Book.find()
  const total = books.length
  const available = books.filter((book) => book.available).length
  const unavailable = total - available
  const genres = [...new Set(books.map((book) => book.genre))]
  const avgYear = total > 0
    ? Math.round(books.reduce((sum, book) => sum + book.year, 0) / total)
    : 0

  return {
    total,
    available,
    unavailable,
    genresCount: genres.length,
    avgYear,
  }
}
