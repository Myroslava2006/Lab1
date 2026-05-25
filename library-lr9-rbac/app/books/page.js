import dbConnect from '@/app/lib/db'
import Book from '@/app/lib/models/Book'

export const metadata = { title: 'Книги | Бібліотека' }

export default async function BooksPage() {
  await dbConnect()
  const books = await Book.find().sort({ createdAt: -1 }).lean()

  return (
    <main className="container px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Каталог книг</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book._id.toString()} className="bg-white rounded-lg shadow p-5 border">
            <h2 className="font-bold text-xl mb-1">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-sm text-gray-500 mt-2">{book.genre} • {book.year}</p>
            <p className="mt-3 text-sm">{book.description}</p>
            <span className={`inline-block mt-4 text-xs px-2 py-1 rounded ${book.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {book.available ? 'Доступна' : 'Видана читачу'}
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}
