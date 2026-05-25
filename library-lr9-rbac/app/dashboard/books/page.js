import dbConnect from '@/app/lib/db'
import Book from '@/app/lib/models/Book'
import BookActions from '@/components/BookActions'

export const metadata = { title: 'Книги | Dashboard' }

export default async function DashboardBooksPage() {
  await dbConnect()
  const books = await Book.find().sort({ createdAt: -1 }).lean()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Управління книгами</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden border">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-500">Назва</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-500">Автор</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-500">Жанр</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-500">Статус</th>
              <th className="px-4 py-3 text-left text-xs uppercase text-gray-500">Дії</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {books.map((book) => (
              <tr key={book._id.toString()}>
                <td className="px-4 py-3 font-medium">{book.title}</td>
                <td className="px-4 py-3 text-gray-600">{book.author}</td>
                <td className="px-4 py-3 text-gray-600">{book.genre}</td>
                <td className="px-4 py-3">{book.available ? 'Доступна' : 'Видана'}</td>
                <td className="px-4 py-3"><BookActions bookId={book._id.toString()} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
