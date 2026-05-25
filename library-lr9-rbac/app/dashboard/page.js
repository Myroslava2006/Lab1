import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/lib/auth'
import dbConnect from '@/app/lib/db'
import Book from '@/app/lib/models/Book'
import User from '@/app/lib/models/User'

export const metadata = { title: 'Кабінет | Бібліотека' }

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  await dbConnect()

  const booksCount = await Book.countDocuments()
  const usersCount = await User.countDocuments()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Панель бібліотеки</h1>
      <p className="mb-6 text-gray-600">Вітаємо, {session?.user?.name}. Ваша роль: {session?.user?.role}.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border rounded-lg p-6 shadow">
          <p className="text-gray-500">Книг у каталозі</p>
          <p className="text-4xl font-bold text-blue-700">{booksCount}</p>
        </div>
        <div className="bg-white border rounded-lg p-6 shadow">
          <p className="text-gray-500">Користувачів</p>
          <p className="text-4xl font-bold text-blue-700">{usersCount}</p>
        </div>
      </div>
    </div>
  )
}
