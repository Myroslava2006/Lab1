import dbConnect from '@/app/lib/db'
import Book from '@/app/lib/models/Book'
import { authorize } from '@/app/lib/authorize'

export async function GET(request, { params }) {
  await dbConnect()
  const { id } = await params

  try {
    const book = await Book.findById(id)
    if (!book) return Response.json({ error: 'Книгу не знайдено' }, { status: 404 })
    return Response.json(book)
  } catch {
    return Response.json({ error: 'Невалідний ID' }, { status: 400 })
  }
}

export async function PUT(request, { params }) {
  const { error } = await authorize('admin')
  if (error) return error

  await dbConnect()
  const { id } = await params

  try {
    const data = await request.json()
    const book = await Book.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    })

    if (!book) return Response.json({ error: 'Книгу не знайдено' }, { status: 404 })
    return Response.json(book)
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message)
      return Response.json({ errors: messages }, { status: 400 })
    }

    return Response.json({ error: 'Помилка сервера' }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  const { error } = await authorize('admin')
  if (error) return error

  await dbConnect()
  const { id } = await params

  try {
    const book = await Book.findByIdAndDelete(id)
    if (!book) return Response.json({ error: 'Книгу не знайдено' }, { status: 404 })
    return Response.json({ message: `Книгу "${book.title}" видалено` })
  } catch {
    return Response.json({ error: 'Невалідний ID' }, { status: 400 })
  }
}
