import dbConnect from '@/lib/db'
import Book from '@/lib/models/Book'

// GET /api/books
// GET /api/books?genre=Фентезі
// GET /api/books?search=гаррі
export async function GET(request) {
  await dbConnect()

  const { searchParams } = new URL(request.url)
  const genre = searchParams.get('genre')
  const search = searchParams.get('search')

  const filter = {}

  if (genre) {
    filter.genre = genre
  }

  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: 'i' } },
      { author: { $regex: search, $options: 'i' } },
    ]
  }

  const books = await Book.find(filter).sort({ createdAt: -1 })

  return Response.json({
    count: books.length,
    books,
  })
}

// POST /api/books
export async function POST(request) {
  await dbConnect()

  try {
    const body = await request.json()
    const book = await Book.create(body)

    return Response.json(book, { status: 201 })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message)
      return Response.json({ errors: messages }, { status: 400 })
    }

    return Response.json({ error: 'Помилка сервера' }, { status: 500 })
  }
}
