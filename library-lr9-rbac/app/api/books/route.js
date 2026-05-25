import dbConnect from '@/app/lib/db'
import Book from '@/app/lib/models/Book'
import { authorize } from '@/app/lib/authorize'

export async function GET(request) {
  await dbConnect()

  const { searchParams } = new URL(request.url)
  const genre = searchParams.get('genre')
  const search = searchParams.get('search')

  const filter = {}

  if (genre && genre !== 'Всі') filter.genre = genre

  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: 'i' } },
      { author: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
    ]
  }

  const books = await Book.find(filter).sort({ createdAt: -1 })
  return Response.json(books)
}

export async function POST(request) {
  const { error } = await authorize('admin')
  if (error) return error

  await dbConnect()

  try {
    const data = await request.json()
    const book = await Book.create(data)
    return Response.json(book, { status: 201 })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message)
      return Response.json({ errors: messages }, { status: 400 })
    }

    return Response.json({ error: 'Помилка сервера' }, { status: 500 })
  }
}
